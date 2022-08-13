import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseDao } from 'src/common/base/base.dao';
import { FilterUtils } from 'src/common/utils/filter.utils';
import { SortUtils } from 'src/common/utils/sort.utils';
import { FindAllVehiclesQueryDto } from '../dto/find-all-vehicles.query.dto';
import { Vehicle } from '../entities/vehicle.entity';
import { vehiclesMock } from '../vehicles.mock';

@Injectable()
export class VehicleDao implements BaseDao<Vehicle> {
  private vehicles: Vehicle[] = vehiclesMock;
  private maxId: number = vehiclesMock.length;

  constructor(
    private readonly sortUtils: SortUtils,
    private readonly filterUtils: FilterUtils,
  ) {}

  create(data: Omit<Vehicle, 'id'>): Vehicle {
    const vehicle: Vehicle = {
      id: ++this.maxId,
      ...data,
    };
    this.vehicles.push(vehicle);

    return vehicle;
  }

  findAll({ sort, filters }: FindAllVehiclesQueryDto): Vehicle[] {
    let vehicles = [...this.vehicles];

    if (filters) {
      // console.log(filters);
      // vehicles = this.filterUtils.filterByMultipleFields(vehicles, filters);
    }

    if (sort) {
      vehicles = this.sortUtils.sortByMultipleFields(vehicles, sort);
    }

    return vehicles;
  }

  remove(id: number): Vehicle {
    const vehicleFound = this.vehicles.find((vehicle) => vehicle.id === id);
    if (!vehicleFound) {
      throw new NotFoundException();
    }

    this.vehicles = this.vehicles.filter((vehicle) => vehicle.id !== id);

    return vehicleFound;
  }
}
