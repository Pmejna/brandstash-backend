import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export abstract class AbstractService {
    protected constructor(
        protected readonly repository: Repository<any>
        ) {}

    async all(): Promise<any[]> {
        return this.repository.find()
    }

    async paginate(page: number = 1, takeProvided: number = 10, relations: string[] = [], condition?: any): Promise<any> {
        const take = takeProvided;
        const [data, total] = await this.repository.findAndCount({
            where: condition ? condition : {},
            take,
            skip: (page-1) * take,
            relations
        });

        return {
            data: data,
            meta: {
                total,
                page,
                last_page: Math.ceil(total/take)
            }
        }
    }

    async getOne(condition): Promise<any | NotFoundException> {
        const result = await this.repository.findOne(condition);
        if(!result) {
            return new NotFoundException('Not found')
        } else {
            return result
        }
    }
    async create(data): Promise<any> {
        return await this.repository.save(data)
    }
    async update(id, data): Promise<any> {
        return await this.repository.update(id, data)
    }
    async delete(id): Promise<any> {
        return await this.repository.delete(id)
    }
}
