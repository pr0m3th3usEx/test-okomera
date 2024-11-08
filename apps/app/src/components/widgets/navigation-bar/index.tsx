import { createListCollection, useBreakpointValue } from '@chakra-ui/react';
import NavigationBarDesktop from './desktop';
import NavigationBarMobile from './mobile';
import { DatasetEnumObj } from '@/utils';

const datasetOptions = createListCollection({
  items: Object.values(DatasetEnumObj).map((key) => ({
    label: key,
    value: key,
  })),
});

const NavigationBar = () => {
  const size = useBreakpointValue({ base: 'sm', md: 'lg' }) as 'sm' | 'lg';

  if (size === 'sm') {
    return <NavigationBarMobile datasetOptions={datasetOptions} />;
  }

  return <NavigationBarDesktop datasetOptions={datasetOptions} />;
};

export default NavigationBar;
