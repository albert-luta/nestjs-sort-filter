import { Injectable } from '@nestjs/common';
import { QuerySortFieldObject } from '../transformations/decorators/transform-query-sort-to-object.decorator';

@Injectable()
export class SortUtils {
  sortByMultipleFields<T extends Record<keyof T, string | number>>(
    entities: T[],
    sortFields: QuerySortFieldObject<T>[],
  ): T[] {
    const sortedEntities = [...entities];

    sortedEntities.sort((a, b) =>
      this.getFirstFieldToSortDirection(sortFields, a, b),
    );

    return sortedEntities;
  }

  private getFirstFieldToSortDirection<T extends Record<string, any>>(
    sortFields: QuerySortFieldObject<T>[],
    a: T,
    b: T,
  ): -1 | 0 | 1 {
    for (const { field, order } of sortFields) {
      const direction = this.compareValues(a[field], b[field]);
      const directionWithOrder = (order === 'asc' ? direction : -direction) as
        | -1
        | 0
        | 1;

      if (directionWithOrder !== 0) {
        return directionWithOrder;
      }
    }
    return 0;
  }

  private compareValues<T extends string | number>(a: T, b: T): -1 | 0 | 1 {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }
}
