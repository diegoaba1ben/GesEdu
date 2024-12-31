import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {Profile} from '../models';
import {BaseRepository} from './base.repository';

export class ProfileRepository extends BaseRepository<Profile, 'id'> { // 'id' es la clave primaria
  constructor(@inject('datasources.usersGesEduDb') dataSource: juggler.DataSource) {
    super(Profile, dataSource);
  }
}
