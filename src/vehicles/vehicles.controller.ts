import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Vehicle } from './entities/vehicle.entity';
import { FindAllVehiclesQueryDto } from './dto/find-all-vehicles.query.dto';

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
  @ApiBadRequestResponse()
  findAll(@Query() query: FindAllVehiclesQueryDto): Vehicle[] {
    return this.vehiclesService.findAll(query);
  }

  @Delete(':id')
  // TODO: Create swagger-ed exceptions
  @ApiNotFoundResponse()
  remove(@Param('id') id: number): Vehicle {
    return this.vehiclesService.remove(id);
  }
}
