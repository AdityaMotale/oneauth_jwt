import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getUsername(): string {
    return this.appService.getUsername();
  }

  @Post()
  postUsername(@Body() body): any {
    return {
      name: body.name,
      data: "User name created",
    };
  }
}
