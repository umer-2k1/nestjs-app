import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schema/user.schema';
import { ErrorResponse, SuccessResponse } from 'src/utils/response.util';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  // Get all users
  async getAllUsers() {
    const users = await this.userModel.find().exec();
    return users;
  }

  async getUserById(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('Could not find the user');
    }
    return user;
  }
  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('Could not find the user');
    }
    return user;
  }

  async getUser() {
    return SuccessResponse(HttpStatus.OK, 'User found');
  }
}
