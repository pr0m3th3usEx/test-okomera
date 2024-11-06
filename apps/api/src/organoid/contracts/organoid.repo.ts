import { Organoid } from '@okomera/api';

export interface IOrganoidRepository {
  getOrganoid(id: string): Promise<Organoid | null>;
  getOrganoids(): Promise<Array<Organoid>>;
}

export const IOrganoidRepository = Symbol('IOrganoidRepository');
