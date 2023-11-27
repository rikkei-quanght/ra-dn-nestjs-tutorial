import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import 'dotenv/config';

const options = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/*.entity{.ts,.js}`],
    migrations: [`${__dirname}/../../db/migrations/*.{ts,js}`],
    autoLoadEntities: true,
    synchronize: false,
};

export default TypeOrmModule.forRoot(options as TypeOrmModuleOptions);

export const connectionSource = new DataSource(options as DataSourceOptions);
