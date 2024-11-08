import { Text, VStack } from '@chakra-ui/react';

const OrganoidPanel = ({ organoidSelected }: { organoidSelected: string | undefined }) => {
  return (
    <VStack w="100%" bg="#202129" h="100%" py="8px" gap="24px">
      {!organoidSelected ? <Text>Selectionner un organoid</Text> : <Text>Organoid selectionne</Text>}
    </VStack>
  );
};

export default OrganoidPanel;
