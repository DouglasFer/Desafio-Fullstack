import { CreateContactDto } from './dto/create-contact.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ContactRepository } from './repositories/contact.repository';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(private contactRepository: ContactRepository) {}

  async create(createContactDto: CreateContactDto) {
    const contact = await this.contactRepository.create(createContactDto);
    return contact;
  }

  async findAll(group: string | undefined) {
    return this.contactRepository.findAll(group);
  }

  async findOne(id: string) {
    const contact = await this.contactRepository.findOne(id);

    if (!contact) {
      throw new NotFoundException('Contact not found!');
    }
    return contact;
  }
  async findByEmail(email: string) {
    const contact = await this.contactRepository.findOne(email);
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.contactRepository.update(id, updateContactDto);
    return contact;
  }

  async remove(id: string) {
    await this.contactRepository.delete(id);
    return;
  }
}
