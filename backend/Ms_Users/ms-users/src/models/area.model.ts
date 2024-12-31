import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Role} from './role.model';
import {Profile} from './profile.model';

@model()
export class Area extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @hasMany(() => Role)
  roles: Role[];

  @belongsTo(() => Profile)
  profileId: number;

  constructor(data?: Partial<Area>) {
    super(data);
  }
}

export interface AreaRelations {
  // describe navigational properties here
  roles?: Role[];
  profile?: Profile;
}

export type AreaWithRelations = Area & AreaRelations;

