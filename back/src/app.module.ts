import { Module } from '@nestjs/common';
import { ClientModule } from './modules/clients/clients.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ClientModule, ContactsModule, AuthModule, ConfigModule.forRoot()],
})
export class AppModule {}
