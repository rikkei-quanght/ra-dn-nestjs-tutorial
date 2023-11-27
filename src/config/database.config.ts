import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

const options = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'ra_module05',
    entities: [`${__dirname}/**/*.entity{.ts,.js}`],
    migrations: [`${__dirname}/../../db/migrations/*.{ts,js}`],
    autoLoadEntities: true,
    synchronize: false,
};

export default TypeOrmModule.forRoot(options as TypeOrmModuleOptions);

export const connectionSource = new DataSource(options as DataSourceOptions);
