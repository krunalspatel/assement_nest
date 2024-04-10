import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { FormDto } from '../dto/form.dto';
import { FormFieldEntity } from './formField.entity';

@Table({ tableName: 'forms' })
export class FormEntity extends Model<FormDto> {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true, // This makes the id auto-incrementing
    })
    id: number;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    title: string;

    @HasMany(() => FormFieldEntity)
    formFields: FormFieldEntity[];
}
