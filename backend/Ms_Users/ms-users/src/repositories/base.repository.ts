import {DefaultCrudRepository, Entity, juggler, Where} from '@loopback/repository';

export class BaseRepository<T extends Entity, ID extends keyof T>
  extends DefaultCrudRepository<T, T[ID]> {
  constructor(
    entityClass: typeof Entity & {prototype: T},
    dataSource: juggler.DataSource,
  ) {
    super(entityClass, dataSource);
  }
}



