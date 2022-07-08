import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin() {
    this.authService.signin();
  }

  @Post('signup')
  signup() {
    this.authService.signup();
  }
}
