declare module '@okomera/api' {
  interface Organoid {
    id: string;
    originalImageKey: string;
    segmentationMaskKey: string;
    maskSurface: number;
  }

  const DatasetEnumObj = {
    TRAINING: 'training',
    TESTING: 'testing',
    VALIDATION: 'validation',
  } as const;

  type DatasetQueryValues = Lowercase<keyof typeof DatasetEnumObj>;

  type Organoid = {
    id: string;
    maskSurface: number;
  };

  interface GetOrganoidRequest {
    organoidId: string;
  }

  interface GetOrganoidResponse extends Organoid {
    originalImageUri: string;
    segmentationMaskUri: string;
    contrast: number;
    brightness: number;
  }

  interface GetOrganoidsRequest {
    dataset: DatasetQueryValues;
  }

  interface GetOrganoidsResponse {
    items: Pick<Organoid, 'id'>[];
    count: number;
  }
}
