import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsObject, IsOptional } from 'class-validator';
import { QuerySort } from 'src/common/transformations/decorators/query-sort.decorator';
import { QuerySortFieldObject } from 'src/common/transformations/decorators/transform-query-sort-to-object.decorator';
import { Vehicle } from '../entities/vehicle.entity';

// filters: {
//   id: {
//     lt: 5,
//     gt: 10,
//     logic: 'or'
//   }
// }

type QueryFiltersAgnosticFieldObject<T extends string | number> = {
  eq?: T;
  neq?: T;
  in?: T[];
  nin?: T[];
};
type QueryFiltersStringFieldObject = {
  contains?: string;
};
type QueryFiltersNumberFieldObject = {
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  range?: [number, number];
};
export type QueryFiltersFieldObject<T extends string | number> =
  QueryFiltersAgnosticFieldObject<T> &
    (T extends string
      ? QueryFiltersStringFieldObject
      : QueryFiltersNumberFieldObject);
export type QueryFiltersObject<T extends Record<keyof T, string | number>> = {
  [K in keyof T]?: QueryFiltersFieldObject<T[K]>;
};

export class FindAllVehiclesQueryDto {
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
  })
  @IsObject()
  // Check if the keys of the object are valid fields
  @Transform(
    ({
      value,
    }: {
      value: Record<string, unknown>;
    }): Record<keyof Vehicle, unknown> => value,
  )
  @Transform(({ value }) => (console.log(value), value))
  filters?: QueryFiltersObject<Vehicle>;

  @IsOptional()
  @QuerySort<Vehicle>({
    id: true,
    type: true,
    brand: true,
    model: true,
    production_year: true,
    kilometers_driven: true,
    price: true,
  })
  sort?: QuerySortFieldObject<Vehicle>[];
}
