import { filterProps, forwardRefWithAs, PropsWithAs } from '@tpham0/react-sdk-utils';
import * as React from 'react';

import { BoxProps } from './types';

type DefaultElement = 'div';

const BoxComponent = (props: PropsWithAs<BoxProps, DefaultElement>, ref: React.Ref<HTMLDivElement>) => {
  const { as: Type = 'div', children, ...rest } = props;

  return (
    <Type ref={ref} {...filterProps(rest)}>
      {children}
    </Type>
  );
};

const Box = forwardRefWithAs<BoxProps, DefaultElement>(BoxComponent);

export default Box;
export type { BoxProps };
