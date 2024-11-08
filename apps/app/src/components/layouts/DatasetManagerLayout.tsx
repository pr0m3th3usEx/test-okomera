import { Grid, GridItem } from '@chakra-ui/react';
import DatasetOrganoidExplorer from '../widgets/dataset-organoid-explorer';
import { useState } from 'react';
import OrganoidPanel from '@/OrganoidPanel';

const DatasetManagerLayout = () => {
  const [organoidId, setOrganoidId] = useState<string>();

  return (
    <Grid w="100%" h="100vh" templateColumns="repeat(6, 1fr)">
      <GridItem colSpan={1} p="12px">
        <DatasetOrganoidExplorer onSelect={setOrganoidId} organoidSelected={organoidId} />
      </GridItem>

      <GridItem colSpan={5} p="12px">
        <OrganoidPanel organoidSelected={organoidId} />
      </GridItem>
    </Grid>
  );
};

export default DatasetManagerLayout;
