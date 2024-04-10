
import { IsNotEmpty, IsString } from 'class-validator';

export class FieldDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    [key: string]: string;
}
