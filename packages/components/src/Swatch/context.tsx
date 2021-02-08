import { createContext } from '@tpham0/react-sdk-utils';

interface SwatchContextProps {
  state: string[];
  setState: (color: string) => void;
  disableDefaultStyles: boolean;
}

const [SwatchContextProvider, useSwatchContext] = createContext<SwatchContextProps>({
  strict: true,
  name: 'SwatchContext',
});

export default SwatchContextProvider;
export { useSwatchContext };
