import { Injectable } from '@nestjs/common';
import { Organoid } from '@okomera/api';
import { IOrganoidRepository } from '../contracts/organoid.repo';

@Injectable()
export class MongoOrganoidRepository implements IOrganoidRepository {
  getOrganoid(_id: string): Promise<Organoid | null> {
    throw new Error('Method not implemented.');
  }

  getOrganoids(): Promise<Array<Organoid>> {
    throw new Error('Method not implemented.');
  }
}
