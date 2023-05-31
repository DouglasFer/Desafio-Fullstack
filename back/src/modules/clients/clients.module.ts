import { PrismaService } from 'src/database/prisma.service';
import { Module } from "@nestjs/common";
import { ClientsController } from "./clients.controller";
import { ClientsService } from "./clients.service";
import { ClientRepository } from './repositories/client.repository';
import { ClientPrismaRepository } from './repositories/prisma/client-prisma.repository';

@Module({
    controllers: [ClientsController],
    providers: [
        ClientsService,
        PrismaService,
        {
            provide: ClientRepository,
            useClass: ClientPrismaRepository,
        },
    ],
    exports: [ClientsService],
})
export class ClientModule{}
