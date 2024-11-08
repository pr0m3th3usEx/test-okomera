import { Box, Grid, GridItem } from '@chakra-ui/react';
import DatasetImageExplorer from '../widgets/dataset-image-explorer';

const DatasetManagerLayout = () => {
  return (
    <Grid w="100%" h="100vh" templateColumns="repeat(6, 1fr)">
      <GridItem colSpan={1} p="12px">
        <DatasetImageExplorer />
      </GridItem>

      <GridItem colSpan={5} p="12px">
        <Box w="100%" bg="red" h="100%" />
      </GridItem>
    </Grid>
  );
};

export default DatasetManagerLayout;
