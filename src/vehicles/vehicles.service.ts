import { Injectable } from '@nestjs/common';
import { VehicleDao } from './dao/vehicle.dao';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(private readonly vehicleDao: VehicleDao) {}

  create(createVehicleDto: CreateVehicleDto): Vehicle {
    return this.vehicleDao.create(createVehicleDto);
  }

  findAll(): Vehicle[] {
    return this.vehicleDao.findAll();
  }

  remove(id: number): Vehicle {
    return this.vehicleDao.remove(id);
  }
}
