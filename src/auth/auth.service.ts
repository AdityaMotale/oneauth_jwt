import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtTokenService: JwtService,
    private userService: UserService,
  ) {}

  async validateUserCredentials(
    email: string,
    passwd: string,
  ): Promise<string | undefined> {
    const user = await this.userService.findUser(email);

    if (user && user.passwd === passwd) {
      return user.id;
    }

    return null;
  }

  async loginWithCredentials(id: string) {
    const res = { id: id, id2: id };

    return {
      access_token: this.jwtTokenService.sign(res),
    };
  }
}
