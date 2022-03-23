import { Global, Module } from '@nestjs/common';
import { ConfigModule as Config } from '@nestjs/config';
import * as path from 'path';
import { path as appRootPath } from 'app-root-path';
import { validate } from './config.validation';

@Global()
@Module({
  imports: [
    Config.forRoot({
      cache: true,
      expandVariables: true,
      envFilePath: [
        path.join(appRootPath, `.env.${process.env.NODE_ENV}.local`),
        path.join(appRootPath, `.env.${process.env.NODE_ENV}`),
        '.env.local',
        '.env',
      ],
      validate,
    }),
  ],
  exports: [Config],
})
export class ConfigModule {}
