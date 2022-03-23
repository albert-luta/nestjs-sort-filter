import { IsOptional } from 'class-validator';
import { QuerySort } from 'src/common/transformations/decorators/query-sort.decorator';
import { QuerySortFieldObject } from 'src/common/transformations/decorators/transform-query-sort-to-object.decorator';
import { Vehicle } from '../entities/vehicle.entity';

export class FindAllVehiclesQueryDto {
  @IsOptional()
  @QuerySort<Vehicle>([
    'id',
    'type',
    'brand',
    'model',
    'production_year',
    'kilometers_driven',
    'price',
  ])
  sort?: QuerySortFieldObject<Vehicle>[];
}
