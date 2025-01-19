import { MongooseModuleOptions } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';
import mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';

const MONGO_URI =
  'mongodb+srv://memonumer504:revolutionary@clumongodbster0.yembrrq.mongodb.net/product-be';

export const mongooseConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  const mongoURI = configService.get<string>('MONGO_URI');
  if (!mongoURI) {
    throw new Error('MONGO_URI is not defined in the environment variables.');
  }
  return {
    uri: mongoURI,
  };
};

export const connectDB = async (
  configService: ConfigService,
): Promise<void> => {
  const logger = new Logger('DB connected');
  const mongoURI = configService.get<string>('MONGO_URI');
  if (!mongoURI) {
    throw new Error('MONGO_URI is not defined in the environment variables.');
  }

  try {
    await mongoose.connect(MONGO_URI);
    logger.log('🍀🍀🍀 Connected the to MongoDB 🍀🍀🍀');
  } catch (error) {
    logger.error(`Failed to connect to DB. Error: ${error}`);
    throw error;
  }
};
