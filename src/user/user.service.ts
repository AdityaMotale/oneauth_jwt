import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      email: 'test1@mail.com',
      password: 'passwd1',
    },
    {
      userId: 2,
      email: 'test2@mail.com',
      password: 'passwd2',
    },
  ];

  async findUser(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
