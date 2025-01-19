import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schema/user.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
    private configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
      passReqToCallback: true,
    });
  }
  async validate(payload: { id: string }) {
    const { id } = payload;

    // Use Mongoose to find the user by the ID in the payload
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new UnauthorizedException('Login first to access this endpoint.');
    }

    return user; // The user is returned as the request user
  }
}
