import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import 'dotenv/config';

const secret = process.env.JWTSECREAT;

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService],
  imports: [
    UserModule,
    JwtModule.register({
      secret: secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
})
export class AuthModule {}
