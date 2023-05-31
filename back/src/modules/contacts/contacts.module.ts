import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ContactRepository } from './repositories/contact.repository';
import { ContactPrismaRepository } from './repositories/prisma/contact-prisma.repository';
import { ContactService } from './contacts.service';
import { ContactsController } from './contacts.controller';

@Module({
  controllers: [ContactsController],
  providers: [
    ContactService,
    PrismaService,
    {
      provide: ContactRepository,
      useClass: ContactPrismaRepository,
    },
  ],
  exports: [ContactService],
})
export class ContactsModule {}
