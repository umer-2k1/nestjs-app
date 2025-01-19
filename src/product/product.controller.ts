import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Param,
  HttpCode,
  ValidationPipe,
} from '@nestjs/common';
import { Product } from 'src/schema/product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('')
  async fetchProducts(): Promise<Product[]> {
    return this.productService.fetchAllProduct();
  }
  @Get('')
  async productDetail(@Param('id') id: string): Promise<Product> {
    return this.productService.fetchProductDetail(id);
  }
  @Post('')
  async newProduct(@Body() product: Product): Promise<Product> {
    return this.productService.addProduct(product);
  }
  @Put()
  async updateProduct(
    @Param('id') id: string,
    @Body() product: Product,
  ): Promise<Product> {
    return this.productService.updateProduct(id, product);
  }
}
