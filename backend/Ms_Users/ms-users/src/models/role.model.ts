import {Entity, hasMany, model, property} from '@loopback/repository';
import { Permission } from './permission.model';

@model()
export class Role extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    unique: true
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @hasMany(() => Permission)
    permissions: Permission[];


  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
