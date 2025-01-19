import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { mongooseConfig, connectDB } from './config/mongoose.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user/user.service';
// import { User } from './user/';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        mongooseConfig(configService),
      inject: [ConfigService],
    }),
    UserModule,
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, UserService, UserModule],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    await connectDB(this.configService);
  }
}
