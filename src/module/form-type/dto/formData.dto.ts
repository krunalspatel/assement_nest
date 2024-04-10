import { IsNotEmpty, IsString } from 'class-validator';

export class FormDataDto {
    @IsNotEmpty()
    @IsString()
    formId: number;

    @IsNotEmpty()
    @IsString()
    uniqueId: string;

    @IsNotEmpty()
    @IsString()
    formFieldId: number;

    @IsNotEmpty()
    @IsString()
    fieldValue: string;
}
