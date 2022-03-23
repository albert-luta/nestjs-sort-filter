import { BaseDto } from './base.dto';
import { BaseQueryDto } from './base.query.dto';

export abstract class BaseDao<T extends BaseDto> {
  abstract create(data: Omit<T, 'id'>): T;
  abstract findAll(query: BaseQueryDto<T>): T[];
  // abstract findOne(id: number): T;
  // abstract update(id: number, data: Partial<Omit<T, 'id'>>): T;
  abstract remove(id: number): T;
}
