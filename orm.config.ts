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

    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    // migrations: commonConf.MIGRATIONS,
    // // cli: commonConf.CLI,
    // migrationsRun: commonConf.MIGRATIONS_RUN,
    entities: commonConf.ENTITIES,
  };

  return ormconfig;
}

export { ormConfig };
