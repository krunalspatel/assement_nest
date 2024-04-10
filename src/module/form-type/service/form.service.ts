import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { FormRepository } from '../repository/form.repository';
import { FormFieldRepository } from '../repository/formField.repository';
import { FieldDto } from '../dto/createForm.dto';
import { FormDataDto } from '../dto/formData.dto';
import { FormDataRepository } from '../repository/formData.repository';


@Injectable()
export class FormService {
    constructor(
        private formRepository: FormRepository,
        private formFieldRepository: FormFieldRepository,
        private formDataRepository: FormDataRepository,
    ) { }

    /**
     * createFormAndFields will provides fields with data types
     * this Function will add  form fields.
     * @param FieldDto 
     * @returns 
     */

    async createFormAndFields(FieldDto: FieldDto) {
        const { title } = FieldDto;
        // Create a new Form
        const form = await this.formRepository.create({ title });

        for (const field of Object.keys(FieldDto)) {
            if (field !== 'title') {
                const type = FieldDto[field];

                await this.formFieldRepository.createForm({
                    fieldName: field,
                    fieldType: type,
                    formId: form.id,
                });
            }
        }

        return { form };
    }
  /**
     * fillFormData function find dynamic fields and store data accordingly
     * @param string  formTitle is a title details 
     * @param bodyData is a fields objest
     * it returns true if success
     */
    async fillFormData(formTitle: string, bodyData: any)  {
        const formObj = await this.formRepository.findByTitle(formTitle);
        if (!formObj) {
            throw new Error('Form is not found');
        }

        const uniqueId = uuid();
        formObj.formFields.forEach(formField => {
            const key = formField.fieldName;
            const fieldValue = bodyData[key];
            if (fieldValue) {
                if (typeof fieldValue !== formField.fieldType) {
                    throw new Error(`fields not Match.`)
                }
                const formData: FormDataDto = { formId: formObj.id, formFieldId: formField.id, fieldValue, uniqueId };
                this.formDataRepository.createForm(formData);
            }
        });

        return true;;
    }

    /**
     * Receive title for form type and returns all form data for given title.
     * @param string  formTitle is a title details 
     * it returns form table details
     */
    async findFormData(formTitle: string): Promise<any> {
        const formObj = await this.formRepository.findByTitle(formTitle);
        if (!formObj) {
            throw new Error('Form not found');
        }

        const formDataObj = await this.formDataRepository.findByFormId(formObj.id);
        if (!formDataObj) {
            return [];
        }

        return this.setformData(formDataObj);
    }

    setformData  (input: any): any {
        const result: any = {};
    
        for (const fid in input) {
            const { uniqueId, formField, fieldValue  } = input[fid];
            if (!result[uniqueId]) 
                result[uniqueId] = {};
            
                result[uniqueId][formField.fieldName] = fieldValue;
        }
        return result;
    };
}
