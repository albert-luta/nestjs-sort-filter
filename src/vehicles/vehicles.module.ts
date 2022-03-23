import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { VehicleDao } from './dao/vehicle.dao';

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService, VehicleDao],
})
export class VehiclesModule {}
