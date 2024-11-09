import { Box, Center, Heading, Image, Text, VStack } from '@chakra-ui/react';
import useGetOrganoidQuery from './hooks/useGetOrganoidQuery';
import Loader from './components/widgets/Loader';

const BlendModeOverlay = ({ originalUrl, maskUrl }: { originalUrl: string; maskUrl: string }) => (
  <Box style={{ position: 'relative', width: '80%' }}>
    <Image loading="lazy" src={originalUrl} alt="Original" style={{ position: 'absolute', top: 0, left: 0 }} />
    <Image
      src={maskUrl}
      loading="lazy"
      alt="Mask"
      style={{
        mixBlendMode: 'normal',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0.6,
      }}
    />
  </Box>
);

const OrganoidPanel = ({ organoidSelected }: { organoidSelected: string | undefined }) => {
  const { data, isLoading, error } = useGetOrganoidQuery({ organoidId: organoidSelected });

  if (!organoidSelected) {
    return (
      <VStack w="100%" bg="#202129" h="100%" py="8px" gap="24px">
        <Text>Selectionner un organoid</Text>
      </VStack>
    );
  }

  if (isLoading) {
    return (
      <VStack w="100%" bg="#202129" h="100%" py="8px" gap="24px">
        <Center w="100%" h="100%">
          <Loader />
        </Center>
      </VStack>
    );
  }

  if (error) {
    <VStack w="100%" bg="#202129" h="100%" py="8px" gap="24px">
      <Center w="100%" h="100%">
        <Text>Erreur lors du chargement de l'organoid</Text>
      </Center>
    </VStack>;
  }

  if (data) {
    return (
      <VStack w="100%" bg="#202129" h="100%" py="8px">
        <VStack w="100%" maxW="800px" alignItems="center" gap="32px">
          {/* Metrics */}
          <VStack alignItems="center" gap="12px">
            <Heading>Metrics</Heading>
            <Text>Surface des masques: {data.maskSurface}</Text>
            <Text>Contraste: {data.contrast}</Text>
            <Text>Luminosité: {data.brightness}</Text>
          </VStack>

          <BlendModeOverlay originalUrl={data.originalImgUri} maskUrl={data.segmentationMaskUri} />
        </VStack>
      </VStack>
    );
  }

  return null;
};

export default OrganoidPanel;
