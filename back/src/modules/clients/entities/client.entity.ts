import { Exclude } from 'class-transformer';
import { formatISO } from 'date-fns';
import { randomUUID } from 'node:crypto';

export class Client {
  readonly id: string;
  fullName: string;
  email: string;
  phone: string;
  readonly createdAt: Date;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
