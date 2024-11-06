import { Module } from '@nestjs/common';
import { OrganoidController } from './organoid.controller';
import { OrganoidService } from './organoid.service';
import { OrganoidRepositoryInMemory } from './adapters/organoid-in-memory.repo';
import { IOrganoidRepository } from './contracts/organoid.repo';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoOrganoidSchema, Organoid } from './adapters/mongo/schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Organoid.name, schema: MongoOrganoidSchema }])],
  controllers: [OrganoidController],
  providers: [
    OrganoidService,
    {
      provide: IOrganoidRepository,
      useClass: OrganoidRepositoryInMemory, // MongoOrganoidRepository
    },
  ],
})
export class OrganoidModule {}
