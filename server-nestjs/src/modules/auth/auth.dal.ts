import { Injectable } from '@nestjs/common';
import { USERS } from './mocks/users.mock';

@Injectable()
export class AuthDal {
  getUserPassword(username: string): string | undefined {
    return USERS.find((user) => username === user.username)?.password;
  }
}
