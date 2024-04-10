import { Injectable } from '@nestjs/common';
import { FormDataDto } from '../dto/formData.dto';
import { FormDataEntity } from '../entity/formData.entity';
import { FormFieldEntity } from '../entity/formField.entity';


@Injectable()
export class FormDataRepository {
    async createForm(FormDataDto: FormDataDto) {
        return await FormDataEntity.create(FormDataDto);
    }

    async findByFormId(formId: number): Promise<FormDataEntity[] | null> {
        return await FormDataEntity.findAll({ where: { formId }, include: [FormFieldEntity], });
    }
}
