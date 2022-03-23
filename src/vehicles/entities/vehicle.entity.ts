import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export enum VehicleType {
  Car = 'car',
  Motorcycle = 'motorcycle',
}

export class Vehicle {
  @IsNumber()
  @IsPositive()
  id: number;

  @IsEnum(VehicleType)
  type: VehicleType;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsNumber()
  @Min(1000)
  @Max(9999)
  production_year: number;

  @IsNumber()
  @Min(0)
  kilometers_driven: number;

  @IsNumber()
  @Min(0)
  price: number;
}
