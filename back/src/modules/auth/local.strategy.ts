import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      clientEmailField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    const client = await this.authService.validateClient(email, password);

    if (!client) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return client;
  }
}
