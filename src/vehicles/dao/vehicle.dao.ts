import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseDao } from 'src/common/base/base.dao';
import { SortUtils } from 'src/common/utils/sort.utils';
import { FindAllVehiclesQueryDto } from '../dto/find-all-vehicles.query.dto';
import { Vehicle } from '../entities/vehicle.entity';
import { vehiclesMock } from '../vehicles.mock';

@Injectable()
export class VehicleDao implements BaseDao<Vehicle> {
  private vehicles: Vehicle[] = vehiclesMock;
  private maxId: number = vehiclesMock.length;

  constructor(private readonly sortUtils: SortUtils) {}

  create(data: Omit<Vehicle, 'id'>): Vehicle {
    const vehicle: Vehicle = {
      id: ++this.maxId,
      ...data,
    };
    this.vehicles.push(vehicle);

    return vehicle;
  }

  findAll({ sort }: FindAllVehiclesQueryDto): Vehicle[] {
    let vehicles = [...this.vehicles];

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
