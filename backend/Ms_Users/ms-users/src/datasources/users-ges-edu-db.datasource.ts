import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

// Configuración del datasource
const config = {
  name: 'usersGesEduDb',
  connector: 'mysql',
  url: '',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!, // Ojo, convierte a número
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

@lifeCycleObserver('datasource')
export class UsersGesEduDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'usersGesEduDb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.usersGesEduDb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

