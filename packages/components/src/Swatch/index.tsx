import { __DEV__, cleanChildren, getStylesObject } from '@tpham0/react-sdk-utils';
import * as React from 'react';
import tw from 'twin.macro';

import Box from '../Box';
import { colorKeys } from './colors';
import { Color } from './components/Color';
import SwatchContextProvider from './context';
import { SwatchProps } from './types';

const Swatch = ({
  children,
  checkedColors = [],
  onChange = () => {},
  styles: stylesProp,
  disableDefaultStyles = false,
  colorCheckedClassName = '',
  colorClassName = '',
  ...rest
}: SwatchProps) => {
  const styles = getStylesObject({ container: tw`flex flex-wrap -mt-2 -ml-2` }, disableDefaultStyles);
  const validChildren = cleanChildren(children);
  const setState = React.useCallback(
    (color: string) => {
      if (checkedColors.includes(color)) {
        onChange(checkedColors.filter((c) => c !== color));
      } else {
        onChange([...checkedColors, color]);
      }
    },
    [JSON.stringify(checkedColors)],
  );

  return (
    <SwatchContextProvider value={{ state: checkedColors, setState, disableDefaultStyles }}>
      <Box css={[styles.container, stylesProp]} {...rest}>
        {validChildren.map((child) =>
          React.cloneElement(child, {
            className: colorClassName,
            checkedClassName: colorCheckedClassName,
            ...child.props,
          }),
        )}
      </Box>
    </SwatchContextProvider>
  );
};

if (__DEV__) {
  Swatch.displayName = 'Swatch';
}

Swatch.Color = Color;
Swatch.colorKeys = colorKeys;
export default Swatch;
export type { SwatchProps };
