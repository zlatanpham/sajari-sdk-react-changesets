import { mapStyles } from '@tpham0/react-sdk-utils';
import tw from 'twin.macro';
import { ModalBodyProps } from '.';

export default function useModalBodyStyles(props: ModalBodyProps) {
  const { padded = true } = props;
  const styles = {
    container: [tw`overflow-auto scrolling-touch`, padded && tw`p-6`],
  };

  return mapStyles(styles);
}
