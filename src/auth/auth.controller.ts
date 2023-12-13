import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthEntity } from './entities/auth.entity';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({
    type: AuthEntity,
  })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }
}
