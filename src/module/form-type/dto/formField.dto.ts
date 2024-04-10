import { IsNotEmpty, IsString } from 'class-validator';

export class FormFieldDTO {
    @IsNotEmpty()
    @IsString()
    formId: number;

    @IsNotEmpty()
    @IsString()
    fieldName: string;

    @IsNotEmpty()
    @IsString()
    fieldType: string;
}
