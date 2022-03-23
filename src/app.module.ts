import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [ConfigModule, VehiclesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
