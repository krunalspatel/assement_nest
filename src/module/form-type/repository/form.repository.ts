import { Injectable } from '@nestjs/common';
import { FormEntity } from '../entity/form.entity';
import { FormDto } from '../dto/form.dto';
import { FormFieldEntity } from '../entity/formField.entity';

@Injectable()
export class FormRepository {
    async create(FormDto: FormDto) {
        return await FormEntity.create(FormDto);
    }

    async findByTitle(title: string) :  Promise<FormEntity | null>  {
        return await FormEntity.findOne({ where: { title }, include: [FormFieldEntity],  });
    }

}
