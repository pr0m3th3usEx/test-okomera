import { Logo } from '@/assets/Logo';
import { HStack, ListCollection, Text, VStack } from '@chakra-ui/react';
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from '@/components/ui/select';
import { DatasetQueryValues } from '@okomera/api';

const NavigationBar = ({
  datasetOptions,
}: {
  datasetOptions: ListCollection<{ label: string; value: DatasetQueryValues }>;
}) => {
  return (
    <VStack w="100%" gap="12px" p="8px">
      <HStack w="100%" p="14px 24px" justifyContent="center" bg="#0C0E2E">
        <Logo w="120px" h="35px" />
      </HStack>
      <SelectRoot size="md" w="100%" collection={datasetOptions}>
        <SelectTrigger>
          <SelectValueText placeholder="Select dataset" />
        </SelectTrigger>
        <SelectContent>
          {datasetOptions.items.map((option) => (
            <SelectItem item={option} key={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </VStack>
  );
};

export default NavigationBar;
