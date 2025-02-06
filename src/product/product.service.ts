import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/schema/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<Product>,
  ) {}

  async fetchAllProduct(): Promise<Product[]> {
    const products = await this.productModel.find({ isActive: true }).exec();
    return products;
  }
  async addProduct(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }
  async fetchProductDetail(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id, isActive: true }).exec();
  }
  async updateProduct(id: string, product: Product): Promise<Product> {
    return await this.productModel.findOneAndUpdate({ _id: id }, product, {
      new: true,
    });
  }
}
