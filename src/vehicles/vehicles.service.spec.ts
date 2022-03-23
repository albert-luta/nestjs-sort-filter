import { Test, TestingModule } from '@nestjs/testing';
import { UtilsModule } from '../common/utils/utils.module';
import { VehicleDao } from './dao/vehicle.dao';
import { VehiclesService } from './vehicles.service';

describe('VehiclesService', () => {
  let service: VehiclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UtilsModule],
      providers: [VehiclesService, VehicleDao],
    }).compile();

    service = module.get<VehiclesService>(VehiclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
