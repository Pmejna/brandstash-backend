import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { Section } from './models/section.entity';

@Injectable()
export class SectionService extends AbstractService {
    constructor(
        @InjectRepository(Section)private readonly sectionRepository: Repository<Section>,
    ) {
        super(sectionRepository);
    }
}
