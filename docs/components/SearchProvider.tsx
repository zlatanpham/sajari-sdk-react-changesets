import { Pipeline, Variables, SearchProviderValues, FieldDictionary, SearchProvider } from '@tpham0/react-search-ui';
import { useRef } from 'react';

const ContextProvider: React.FC = ({ children }) => {
  const ref = useRef<SearchProviderValues['search']>({
    pipeline: new Pipeline(
      {
        account: '1594153711901724220',
        collection: 'bestbuy',
      },
      'query',
    ),
    variables: new Variables(),
    fields: new FieldDictionary({
      subtitle: (data: Record<string, any>) => data.level4 || data.level3 || data.level2 || data.level1,
      title: 'name',
    }),
  });

  return <SearchProvider search={ref.current}>{children}</SearchProvider>;
};

export default ContextProvider;
