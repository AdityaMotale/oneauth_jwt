import { Injectable } from '@nestjs/common';

// User object for Data Interface
export type User = any;

@Injectable()
export class UserService {
  /**
   * Placeholder data for auth functionalities
   */
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

  /**
   * @param email as a string
   * @returns `User` Object
   */
  async findUser(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
}
