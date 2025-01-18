import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  show(id: string) {
    return this.usersRepository.findOne(id);
  }

  findByEmail(email: string) {
    return this.usersRepository.findOne({ email });
  }
}
