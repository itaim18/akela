import { Injectable } from '@nestjs/common';
import { AuthDal } from './auth.dal';
import { UnauthorizedUserError } from 'src/errors/UnauthorizedUserError';

@Injectable()
export class AuthService {
  constructor(private readonly authDal: AuthDal) {}

  login(username: string, password: string) {
    const passwordFromDal = this.authDal.getUserPassword(username);

    if (passwordFromDal !== password) throw new UnauthorizedUserError();
  }
}
