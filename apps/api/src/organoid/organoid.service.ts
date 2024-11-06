import { Inject, Injectable } from '@nestjs/common';
import { DatasetQueryValues, GetOrganoidResponse, GetOrganoidsResponse } from '@okomera/api';
import { IOrganoidRepository } from './contracts/organoid.repo';

@Injectable()
export class OrganoidService {
  constructor(@Inject(IOrganoidRepository) private organoidRepository: IOrganoidRepository) {}

  async getOrganoid(_id: string): Promise<GetOrganoidResponse> {
    throw new Error('Not implemented');
  }

  async getOrganoids(_dataset: DatasetQueryValues): Promise<GetOrganoidsResponse> {
    throw new Error('Not implemented');
  }
}
