import { DATASET_NAMES, DatasetQueryValues, GetOrganoidRequestParams, GetOrganoidsRequestQuery } from '@okomera/api';
import { IsIn, IsString } from 'class-validator';

export class GetOrganoidRequestParamsDto implements GetOrganoidRequestParams {
  @IsString()
  id: string;
}

export class GetOrganoidsRequestQueryDto implements GetOrganoidsRequestQuery {
  @IsString()
  @IsIn(DATASET_NAMES)
  dataset: DatasetQueryValues;
}
