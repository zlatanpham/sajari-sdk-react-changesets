import { ComboboxProps } from '@tpham0/react-components';

export interface InputProps<T> extends Pick<ComboboxProps<T>, 'placeholder' | 'onChange'> {
  mode?: ComboboxProps<T>['mode'] | 'instant';
}
