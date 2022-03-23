import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseDao } from 'src/common/base/base.dao';
import { Vehicle } from '../entities/vehicle.entity';
import { vehiclesMock } from '../vehicles.mock';

@Injectable()
export class VehicleDao implements BaseDao<Vehicle> {
  private vehicles: Vehicle[] = vehiclesMock;
  private maxId: number = vehiclesMock.length;

  create(data: Omit<Vehicle, 'id'>): Vehicle {
    const vehicle: Vehicle = {
      id: ++this.maxId,
      ...data,
    };
    this.vehicles.push(vehicle);

    return vehicle;
  }

  findAll(): Vehicle[] {
    return this.vehicles;
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
