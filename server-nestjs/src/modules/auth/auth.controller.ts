import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  login(
    @Query('username') username: string,
    @Query('password') password: string,
  ) {
    this.authService.login(username, password);
  }
}
