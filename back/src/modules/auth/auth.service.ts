import { Injectable } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private clientService: ClientsService,
    private jwtService: JwtService,
  ) {}

  async validateClient(clientEmail: string, clientPassword: string) {
    const client = await this.clientService.findByEmail(clientEmail);
    console.log(client);
    if (client) {
      const passwordMatch = await compare(clientPassword, client.password);
      if (passwordMatch) {
        return { email: client.email };
      }
    }
    return null;
  }

  async login(email: string) {
    const client = await this.clientService.findByEmail(email);
    const payload = { sub: client.id, username: client.email };
    console.log(client);

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
