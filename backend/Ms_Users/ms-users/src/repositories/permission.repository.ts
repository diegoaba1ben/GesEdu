import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {Permission} from '../models';
import {BaseRepository} from './base.repository';

export class PermissionRepository extends BaseRepository<Permission, 'id'> { // 'id' es la clave primaria
  constructor(@inject('datasources.usersGesEduDb') dataSource: juggler.DataSource) {
    super(Permission, dataSource);
  }
}
