// API types
declare module '@okomera/api' {
  interface DatabaseRepositoryAdapter {
    getOrganoid(id: string): Promise<void>;
    getOrganoids(): Promise<void>;
  }

  // interface DatabaseOrganoid {
  //   id: string;
  //   image_name: string;
  //   orignalImageKey: string;
  //   segmentationMaskKey: string;
  //   maskSurface: number;
  // }

  const DATASET_NAMES = ['training', 'testing', 'validation'] as const;
  type DatasetQueryValues = (typeof DATASET_NAMES)[number];

  interface GetOrganoidsRequestQuery {
    dataset: DatasetQueryValues;
  }

  interface GetOrganoidsResponse {
    items: Pick<GetOrganoidResponse, 'id' | 'imageName'>[];
    count: number;
  }

  interface GetOrganoidRequestParams {
    id: string;
  }

  interface GetOrganoidResponse {
    id: string;
    imageName: string;
    originalImgUri: string;
    segmentationMaskUri: string;
    maskSurface: number;
    contrast: number;
    brightness: number;
  }
}