import { Grid, GridItem } from '@chakra-ui/react';
import DatasetOrganoidExplorer from '../widgets/dataset-organoid-explorer';
import { useState } from 'react';
import OrganoidPanel from '@/OrganoidPanel';

const DatasetManagerLayout = () => {
  const [organoidId, setOrganoidId] = useState<string>();

  return (
    <Grid w="100%" h="100%" templateColumns="repeat(6, 1fr)">
      <GridItem colSpan={1} p="12px" minW="233px" h="calc(100vh - 72px)">
        <DatasetOrganoidExplorer onSelect={setOrganoidId} organoidSelected={organoidId} />
      </GridItem>

      <GridItem colSpan={5} p="12px">
        <OrganoidPanel organoidSelected={organoidId} />
      </GridItem>
    </Grid>
  );
};

export default DatasetManagerLayout;
