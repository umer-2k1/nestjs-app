import { IsString, IsNotEmpty, IsInt, Min, isNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  desc: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsInt()
  @Min(1, { message: 'Quantity must be at least 1' })
  qty: number;

  @IsInt()
  price: number;

  @IsString()
  images: string[];

  @IsNotEmpty()
  @IsString()
  brand: string;

  @IsNotEmpty()
  @IsString()
  tags: string[];
}
