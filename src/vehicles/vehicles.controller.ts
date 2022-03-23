import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Vehicle } from './entities/vehicle.entity';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @ApiBadRequestResponse()
  create(@Body() createVehicleDto: CreateVehicleDto): Vehicle {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  findAll(): Vehicle[] {
    return this.vehiclesService.findAll();
  }

  @Delete(':id')
  // TODO: Create swagger-ed exceptions
  @ApiNotFoundResponse()
  remove(@Param('id') id: number): Vehicle {
    return this.vehiclesService.remove(id);
  }
}
