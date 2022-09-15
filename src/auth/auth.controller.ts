import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * @param Body as a JSON object
   * @returns `JWT Token` as a string
   */
  @Post('login')
  async loginWithEmail(@Body() req) {
    return this.authService.loginWithCredentials(req.email);
  }
}
