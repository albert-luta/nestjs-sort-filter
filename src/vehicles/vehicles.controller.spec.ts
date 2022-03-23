import { Test, TestingModule } from '@nestjs/testing';
import { UtilsModule } from 'src/common/utils/utils.module';
import { VehicleDao } from './dao/vehicle.dao';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';

describe('VehiclesController', () => {
  let controller: VehiclesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UtilsModule],
      controllers: [VehiclesController],
      providers: [VehiclesService, VehicleDao],
    }).compile();

    controller = module.get<VehiclesController>(VehiclesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
