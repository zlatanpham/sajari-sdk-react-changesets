import { BoxProps } from '@tpham0/react-components';

import { ViewOptionProps } from '../ViewOption';

export interface ViewTypeProps
  extends Omit<BoxProps, 'className'>,
    Pick<ViewOptionProps, 'label' | 'size' | 'inline'> {}
