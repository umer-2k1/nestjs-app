import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Param,
  HttpCode,
  ValidationPipe,
  HttpStatus,
} from '@nestjs/common';
import { Product } from 'src/schema/product.schema';
import { ProductService } from './product.service';
import { ErrorResponse, SuccessResponse } from 'src/utils/response.util';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('')
  async fetchProducts() {
    try {
      const products = this.productService.fetchAllProduct();
      return SuccessResponse(
        HttpStatus.OK,
        'Products fetched successfully',
        products,
      );
    } catch (error) {
      ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
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
