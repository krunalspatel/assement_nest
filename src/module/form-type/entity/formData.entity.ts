import {
    Column,
    DataType,
    Model,
    Table,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { FormEntity } from './form.entity';
import { FormFieldEntity } from './formField.entity';
import { FormDataDto } from '../dto/formData.dto';

@Table({ tableName: 'form_data' })
export class FormDataEntity extends Model<FormDataDto> {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true, // This makes the id auto-incrementing
    })
    id: number;

    @Column({
        primaryKey: true,
        type: DataType.UUID,
    })
    uniqueId: string;

    @ForeignKey(() => FormEntity)
    @Column
    formId: number;

    @ForeignKey(() => FormFieldEntity)
    @Column
    formFieldId: number;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    fieldValue: string;

    @BelongsTo(() => FormEntity)
    form: FormEntity;

    @BelongsTo(() => FormFieldEntity)
    formField: FormEntity;
}
