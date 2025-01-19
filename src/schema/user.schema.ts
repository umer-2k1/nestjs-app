import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: [true, 'Name is required'] })
  name: string;

  @Prop({ required: [true, 'Email is required'], unique: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ enum: ['user', 'admin'], default: 'admin' })
  role: string;

  @Prop({ default: true })
  isActive: boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);
