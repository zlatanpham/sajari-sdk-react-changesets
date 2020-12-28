import { combineFilters, EVENT_RESPONSE_UPDATED, Response, SearchProviderValues, Variables } from '@tpham0/react-hooks';
import { isEmpty } from '@tpham0/react-sdk-utils';

function search(props: SearchProviderValues['search']): Promise<string | null> {
  if (!props) {
    throw new Error('findResultsState requires a `search` config');
  }

  const { pipeline, filters, variables = new Variables() } = props;

  if (filters) {
    const filter = combineFilters(filters);

    variables.set({
      filter: isEmpty(filter.filter()) ? '_id != ""' : () => filter.filter(),
      countFilters: () => filter.countFilters(),
      buckets: () => filter.buckets(),
      count: () => filter.count(),
    });
  }

  return new Promise((resolve) => {
    const unlisten = pipeline.listen(EVENT_RESPONSE_UPDATED, (response: Response) => {
      unlisten();

      if (!response || response.isError()) {
        resolve(null);
        return;
      }

      const serialized = JSON.stringify({
        queryValues: Object.fromEntries(response.getQueryValues() ?? []),
        response: Object.fromEntries(response.getResponse() ?? []),
        values: Object.fromEntries(response.getValues() ?? []),
      });

      resolve(serialized);
    });

    pipeline.search(variables.get());
  });
}

export default search;
