import { UpdateClientDto } from './dto/update-client.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { ClientRepository } from './repositories/client.repository';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class ClientsService {
  constructor(private clientsRepository: ClientRepository) {}

  async create(createClientDto: CreateClientDto) {
    const findClient = await this.clientsRepository.findByEmail(
      createClientDto.email,
    );
    if (findClient) {
      throw new ConflictException('Email already exists');
    }
    const client = await this.clientsRepository.create(createClientDto);
    return client;
  }

  async findAll() {
    const clients = await this.clientsRepository.findAll();
    return clients;
  }

  async findOne(id: string) {
    const client = await this.clientsRepository.findOne(id);
    if (!client) {
      throw new NotFoundException('User not found!');
    }
    return client;
  }

  async findByEmail(email: string) {
    const client = await this.clientsRepository.findByEmail(email);
    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const client = await this.clientsRepository.update(id, updateClientDto);
    return client;
  }

  async remove(id: string) {
    await this.clientsRepository.delete(id);
    return;
  }
}
