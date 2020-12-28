/* eslint-disable jsx-a11y/anchor-has-content */
import { __DEV__ } from '@tpham0/react-sdk-utils';

import { IconSpinner } from '../assets/icons';
import { SpinnerProps } from './types';

const Spinner = ({ styles, disableDefaultStyles, ...props }: SpinnerProps) => <IconSpinner css={styles} {...props} />;

if (__DEV__) {
  Spinner.displayName = 'Spinner';
}

export default Spinner;
export type { SpinnerProps };
