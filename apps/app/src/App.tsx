import { Text } from '@chakra-ui/react';
import AppLayout from './components/AppLayout';
import DatasetProvider from './contexts/DatasetProvider';
import DatasetSelectedGuard from './guards/DatasetSelectedGuard';

function App() {
  return (
    <DatasetProvider>
      <AppLayout>
        <DatasetSelectedGuard>
          <Text>Test</Text>
        </DatasetSelectedGuard>
      </AppLayout>
    </DatasetProvider>
  );
}

export default App;
