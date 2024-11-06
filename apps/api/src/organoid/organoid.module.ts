import { Module } from '@nestjs/common';
import { OrganoidController } from './organoid.controller';
import { OrganoidService } from './organoid.service';
import { OrganoidRepositoryInMemory } from './adapters/organoid-in-memory.repo';
import { IOrganoidRepository } from './contracts/organoid.repo';

@Module({
  imports: [],
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
