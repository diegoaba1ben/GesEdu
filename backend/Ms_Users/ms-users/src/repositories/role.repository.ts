import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {Role} from '../models';
import {BaseRepository} from './base.repository';

export class RoleRepository extends BaseRepository<Role, 'id'> { // 'id' es la clave primaria
  constructor(@inject('datasources.usersGesEduDb') dataSource: juggler.DataSource) {
    super(Role, dataSource);
  }
}
