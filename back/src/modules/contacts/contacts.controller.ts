import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ContactService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactService: ContactService) {}

  @Post(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createContactDto: CreateContactDto, @Param('id') id: string) {
    return this.contactService.create(createContactDto, id);
  }

  @Get(':clientId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAll(
    @Query('group') group: string | undefined,
    @Param('clientId') clientId: string,
  ) {
    return this.contactService.findAll(group, clientId);
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(id, updateContactDto);
  }

  @HttpCode(204)
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
