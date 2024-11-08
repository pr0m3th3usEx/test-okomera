import useDatasetContext from './hooks/contexts/useDatasetContext';
import useGetOrganoidsQuery from './hooks/useGetOrganoidsQuery';

const DatasetManager = () => {
  const { dataset } = useDatasetContext();
  const { data, isLoading, error } = useGetOrganoidsQuery({ dataset: dataset! }); // dataset shall be set at this point

  return <>Dataset Manager</>;
};

export default DatasetManager;
