import useDatasetMetadataContext from '@/hooks/contexts/useDatasetMetadataContext';
import { Box, Text, VStack } from '@chakra-ui/react';

const DatasetImageExplorer = () => {
  const { items, count } = useDatasetMetadataContext();

  return (
    <VStack w="100%" bg="#0C0E2E" h="100%" py="8px" gap="24px">
      <Text fontWeight="semibold">Nombre de photos: {count}</Text>
      <VStack w="100%" overflow="auto" gap={0}>
        {items.map(({ id }, index) => (
          <Box w="100%" p="18px 12px" cursor="pointer" _hover={{ bg: '#3182CE20' }} onClick={() => console.log(id)}>
            <Text fontSize="sm">Image {index}</Text>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default DatasetImageExplorer;
