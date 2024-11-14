import { IsString, IsNumber, MinLength } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(10)
  description: string;

  @IsNumber()
  price: number;
}