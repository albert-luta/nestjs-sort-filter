import { Transform } from 'class-transformer';
import { SortOrder } from 'src/common/utils/sort-order.enum';

export class QuerySortFieldObject<T extends Record<keyof T, unknown>> {
  field: keyof T;
  order: `${SortOrder}`;
}

export const TransformQuerySortToObject = <
  T extends Record<keyof T, unknown>,
>() =>
  Transform(
    ({
      value: fieldsOrders,
    }: {
      value: string[];
    }): QuerySortFieldObject<T>[] => {
      return fieldsOrders.map((fieldOrder) => {
        const [field, order] = fieldOrder.split(':');
        return { field, order } as QuerySortFieldObject<T>;
      });
    },
  );
