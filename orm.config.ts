import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCRONIZE: true,
    ENTITIES: [__dirname + '/**/*.entity{.ts,.js}'],
    MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
    CLI: {
      migrationsDir: 'src/migrations',
    },
    MIGRATIONS_RUN: false,
  };

  const ormconfig: TypeOrmModuleOptions = {
    type: 'postgres',
    database: 'postgres',
   // host: '35.190.153.124',
   host: 'postgres-db.cbwmlokynbts.ap-northeast-2.rds.amazonaws.com',
    port: 5432,
    username: 'postgres',
    password: '12341234',
    logging: false,
    synchronize: true,
    autoLoadEntities: true,
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // migrations: commonConf.MIGRATIONS,
    // // cli: commonConf.CLI,
    // migrationsRun: commonConf.MIGRATIONS_RUN,
    entities: commonConf.ENTITIES,
  };

  return ormconfig;
}

export { ormConfig };