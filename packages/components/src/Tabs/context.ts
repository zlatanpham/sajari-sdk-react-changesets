import { createContext } from '@tpham0/react-sdk-utils';

import { TabsContextOptions } from './types';

const [TabContextProvider, useTabContext] = createContext<TabsContextOptions>({
  strict: true,
  name: 'TabsContext',
});

export default TabContextProvider;
export { useTabContext };
