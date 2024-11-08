import { HStack, ListCollection } from '@chakra-ui/react';
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from '@/components/ui/select';
import { Logo } from '@/assets/Logo.tsx';
import { DatasetQueryValues } from '@okomera/api';

const NavigationBar = ({
  datasetOptions,
}: {
  datasetOptions: ListCollection<{ label: string; value: DatasetQueryValues }>;
}) => {
  return (
    <HStack w="100%" p="12px 24px" justifyContent="space-between" bg="#0C0E2E">
      <Logo w="170px" h="50px" />
      <SelectRoot size="md" minW="250px" w="fit-content" collection={datasetOptions}>
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
    </HStack>
  );
};

export default NavigationBar;
