import { Contact } from './../entities/contact.entity';
import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';


export abstract class ContactRepository {
  abstract create(data: CreateContactDto): Promise<Contact>;
  abstract findOne(id: string): Promise<Contact | undefined>;
  abstract findAll(group: string | undefined): Promise<Contact[] | object>;
  abstract findByEmail(email: string): Promise<Contact> | Contact;
  abstract update(id: string, data: UpdateContactDto): Promise<Contact> | Contact;
  abstract delete(id: string): Promise<void> | void;
}