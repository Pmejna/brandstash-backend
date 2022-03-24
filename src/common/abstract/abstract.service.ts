import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export abstract class AbstractService {
    protected constructor(
        protected readonly repository: Repository<any>
        ) {}

    async all(): Promise<any[]> {
        return this.repository.find()
    }

    async paginate(page: number = 1): Promise<any> {
        const take = 10;
        const [data, total] = await this.repository.findAndCount({
            take,
            skip: (page-1) * take
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

    async getOne(condition): Promise<any> {
        return this.repository.findOne(condition)
    }
    async create(data): Promise<any> {
        return await this.repository.save(data)
    }
    async update(role_id, data): Promise<any> {
        return await this.repository.update(role_id, data)
    }
    async delete(id): Promise<any> {
        return await this.repository.delete(id)
    }
}
