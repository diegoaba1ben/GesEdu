import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {User} from '../models';
import {BaseRepository} from './base.repository';

export class UserRepository extends BaseRepository<User, 'id'>//se usa id como clave
 {
  constructor(@inject('datasources.usersGesEduDb') dataSource: juggler.DataSource) {
    super(User, dataSource);
  }
}




