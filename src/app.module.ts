import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './common/config/config.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { UtilsModule } from './common/utils/utils.module';

@Module({
  imports: [ConfigModule, VehiclesModule, UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
