import { Injectable } from '@nestjs/common';
import { FormFieldEntity } from '../entity/formField.entity';
import { FormFieldDTO } from '../dto/formField.dto';

@Injectable()
export class FormFieldRepository {
    async createForm(formFieldDTO: FormFieldDTO) {
        return await FormFieldEntity.create(formFieldDTO);
    }
}
