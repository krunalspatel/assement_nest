import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Sequelize } from 'sequelize-typescript';
import { Logger } from 'winston';
import { DatabaseService } from './database.service';
import { FormEntity } from 'src/module/form-type/entity/form.entity';
import { FormFieldEntity } from '../module/form-type/entity/formField.entity';
import { FormDataEntity } from 'src/module/form-type/entity/formData.entity';

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        inject: [WINSTON_MODULE_PROVIDER, ConfigService, DatabaseService],
        useFactory: async (
            logger: Logger,
            configService: ConfigService,
            databaseService: DatabaseService,
        ) => {
            const sequelize = new Sequelize(
                configService.get('database.db1.databaseName')!,
                configService.get('database.db1.username')!,
                configService.get('database.db1.password')!,
                {
                    host: configService.get('database.db1.host')!,
                    port: configService.get('database.db1.port')!,
                    dialect: configService.get('database.db1.dialect')!,
                },
            );

            // Add table modules here...
            sequelize.addModels([
                FormEntity,
                FormFieldEntity,
                FormDataEntity,
            ]);

            // Sync database with module
            const isAlterTable = configService.get('database.main.alterTable')!;
            await sequelize.sync({ alter: isAlterTable });

            try {
                await sequelize.authenticate({});

                logger.info('Database connected successfully', {
                    database: sequelize.config.database,
                    username: sequelize.config.username,
                    host: sequelize.config.host,
                    port: sequelize.config.port,
                });

                // Seeding data
                await databaseService.seedingData();
            } catch (error) {
                logger.error(error);
            }
            return sequelize;
        },
    },
];
