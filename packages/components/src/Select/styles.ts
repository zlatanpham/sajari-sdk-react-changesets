import { mapStyles } from '@tpham0/react-sdk-utils';
import tw from 'twin.macro';

export function useSelectStyles() {
  const styles = {
    container: [tw`relative`],
  };

  return { styles: mapStyles(styles) };
}
