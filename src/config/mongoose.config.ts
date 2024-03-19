import { MongooseModuleOptions } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';
import mongoose from 'mongoose';

const MONGO_URI =
  'mongodb+srv://memonumer504:revolutionary@clumongodbster0.yembrrq.mongodb.net/product-be';

export const mongooseConfig: MongooseModuleOptions = {
  uri: MONGO_URI,
};

export const connectDB = async (): Promise<void> => {
  const logger = new Logger('DB connected');
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log('🍀🍀🍀 Connected to MongoDB 🍀🍀🍀');
  } catch (error) {
    logger.error(`Failed to connect to DB. Error: ${error}`);
    throw error;
  }
};
