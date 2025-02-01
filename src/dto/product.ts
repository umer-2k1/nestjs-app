import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  desc: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty()
  @IsInt()
  @Min(1, { message: 'Quantity must be at least 1' })
  qty: number;

  @ApiProperty()
  @IsInt()
  price: number;

  @ApiProperty()
  @IsString()
  images: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  tags: string[];
}
