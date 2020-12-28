import { mapStyles } from '@tpham0/react-sdk-utils';
import tw from 'twin.macro';

export function useTypeaheadStyles() {
  const styles = {
    container: [tw`text-gray-400`],
    hidden: [tw`opacity-0`],
  };

  return mapStyles(styles);
}
