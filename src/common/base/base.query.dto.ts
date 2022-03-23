import { QuerySortFieldObject } from '../transformations/decorators/transform-query-sort-to-object.decorator';
import { BaseDto } from './base.dto';

export abstract class BaseQueryDto<T extends BaseDto> {
  sort?: QuerySortFieldObject<T>[];
}
