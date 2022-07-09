import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return 'I have signed in';
  }
  signup() {
    return 'I have signed up';
  }
}
