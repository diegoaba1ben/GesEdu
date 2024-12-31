import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {User} from './user.model';
import {Area} from './area.model';

@model()
export class Profile extends Entity {
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
  })
  description?: string; // Opcional, pero recomendado a nivel de UI

  @belongsTo(() => User)
  userId: number;

  @hasMany(() => Area)
  areas: Area[];

  constructor(data?: Partial<Profile>) {
    super(data);
  }

  // Métodos para gestionar áreas
  addArea(area: Area): void {
    this.areas.push(area);
  }

  removeArea(areaId: number): void {
    this.areas = this.areas.filter(area => area.id !== areaId);
  }

  listAreas(): Area[] {
    return this.areas;
  }
}

export interface ProfileRelations {
  // describe navigational properties here
  user?: User;
  areas?: Area[];
}

export type ProfileWithRelations = Profile & ProfileRelations;

