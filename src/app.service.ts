import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }



  getUsername(): string {
    return "pari001";
  }
}
