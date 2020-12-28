import { BoxProps } from '@tpham0/react-components';

import { ViewOptionProps } from '../ViewOption';

export interface ResultsPerPageProps
  extends Omit<BoxProps, 'className'>,
    Pick<ViewOptionProps, 'label' | 'size' | 'inline'> {
  options?: number[];
}
