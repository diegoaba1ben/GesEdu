import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
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
  email: string & {format: 'email'};

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'boolean',
    default: true,
  })
  status?: boolean;

  @property({
    type: 'number',
    required: true,
  })
  profileId: number;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
