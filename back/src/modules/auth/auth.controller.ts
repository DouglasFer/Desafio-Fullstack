import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guards';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './dtos/login.dto';

@ApiTags('login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('')
  async login(@Body() user: LoginDTO) {
    return this.authService.login(user.email);
  }
}
