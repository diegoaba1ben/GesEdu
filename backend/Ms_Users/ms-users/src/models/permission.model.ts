import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Role} from './role.model';

@model()
export class Permission extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    unique: true
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'boolean',
    default: false,
  })
  protected: boolean;

  @belongsTo(() => Role)
  roleId: number;

  constructor(data?: Partial<Permission>) {
    super(data);
  }
}
