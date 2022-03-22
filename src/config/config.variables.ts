import { IsEnum, IsNumber, IsString } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Staging = 'staging',
}

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsString()
  HOST: string;

  @IsNumber()
  PORT: number;

  @IsString()
  ORIGIN: string;

  @IsString()
  CLIENT_HOST: string;

  @IsNumber()
  CLIENT_PORT: number;

  @IsString()
  CLIENT_ORIGIN: string;
}
