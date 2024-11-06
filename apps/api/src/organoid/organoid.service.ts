import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DatasetQueryValues, GetOrganoidResponse, GetOrganoidsResponse } from '@okomera/api';
import { IOrganoidRepository } from './contracts/organoid.repo';
import { Storage } from '@google-cloud/storage';
import { DEFAULT_IMG_URL_EXPIRATION_MILLIS, GCP_BUCKET_NAME, GCP_PROJECT_ID } from 'src/config';

const storage = new Storage({
  projectId: GCP_PROJECT_ID,
});
const bucket = storage.bucket(GCP_BUCKET_NAME);

@Injectable()
export class OrganoidService {
  constructor(@Inject(IOrganoidRepository) private organoidRepository: IOrganoidRepository) {}

  async getOrganoid(id: string): Promise<GetOrganoidResponse> {
    const organoid = await this.organoidRepository.getOrganoid(id);
    if (!organoid) throw new NotFoundException({ entity: 'organoid' });

    // Get Original img URL
    const originalImgUri = await bucket.file(organoid.originalImageKey).getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + DEFAULT_IMG_URL_EXPIRATION_MILLIS,
    });

    // Get Segmentation img URL
    const segmentationMaskUri = await bucket.file(organoid.segmentationMaskKey).getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + DEFAULT_IMG_URL_EXPIRATION_MILLIS,
    });

    // Calculate metrics
    return {
      id: organoid.id,
      maskSurface: organoid.maskSurface,
      originalImgUri: originalImgUri[0],
      segmentationMaskUri: segmentationMaskUri[0],
      contrast: 0,
      brightness: 0,
    };
  }

  async getOrganoids(dataset: DatasetQueryValues): Promise<GetOrganoidsResponse> {
    const items = (await this.organoidRepository.getOrganoids(dataset)).map((organoid) => {
      return {
        id: organoid.id,
      };
    });

    return {
      items,
      count: items.length,
    };
  }
}
