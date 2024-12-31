import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {Area} from '../models';
import {BaseRepository} from './base.repository';

export class AreaRepository extends BaseRepository<Area, 'id'> { // 'id' es la clave primaria
  constructor(@inject('datasources.usersGesEduDb') dataSource: juggler.DataSource) {
    super(Area, dataSource);
  }
}

