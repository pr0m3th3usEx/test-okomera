import { Injectable } from '@nestjs/common';
import { Organoid } from '@okomera/api';
import { IOrganoidRepository } from '../contracts/organoid.repo';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organoid as MongoOrganoid } from './mongo/schema';

@Injectable()
export class MongoOrganoidRepository implements IOrganoidRepository {
  constructor(@InjectModel(MongoOrganoid.name) private organoidModel: Model<MongoOrganoid>) {}

  getOrganoid(_id: string): Promise<Organoid | null> {
    throw new Error('Method not implemented.');
  }

  getOrganoids(): Promise<Array<Organoid>> {
    throw new Error('Method not implemented.');
  }
}
