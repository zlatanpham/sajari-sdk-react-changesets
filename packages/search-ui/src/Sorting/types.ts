import { BoxProps } from '@tpham0/react-components';

import { ViewOptionProps } from '../ViewOption';

export type SortOption = {
  name: string;
  value: string;
};

export interface SortingProps extends Omit<BoxProps, 'className'>, Pick<ViewOptionProps, 'label' | 'size' | 'inline'> {
  options?: SortOption[];
}
