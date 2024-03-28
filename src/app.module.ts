import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { mongooseConfig, connectDB } from './config/mongoose.config';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user/user.service';
import { User } from './user/user';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import mongoose from 'mongoose';
@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({ useFactory: () => mongooseConfig }),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, User],
})
export class AppModule {
  constructor() {
    connectDB();
  }
}
