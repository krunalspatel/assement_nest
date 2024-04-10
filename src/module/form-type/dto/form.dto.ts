import { IsNotEmpty, IsString } from 'class-validator';

export class FormDto {
    @IsNotEmpty()
    @IsString()
    title: string;
}
