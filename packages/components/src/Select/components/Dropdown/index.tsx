import { mergeProps } from '@react-aria/utils';
import { getStylesObject } from '@tpham0/react-sdk-utils';
import * as React from 'react';

import Box from '../../../Box';
import { useSelectContext } from '../../context';
import Option from '../Option';
import { useDropdownStyles } from './styles';

const Dropdown = () => {
  const { items, open, getMenuProps, disableDefaultStyles, customClassNames } = useSelectContext();
  const { styles: dropdownStyles, focusRingProps } = useDropdownStyles({ shown: open });
  const styles = getStylesObject(dropdownStyles, disableDefaultStyles);
  const options = items.map((item) => <Option {...item} key={item.value} />);

  return (
    <Box
      as="ul"
      css={styles.container}
      {...mergeProps(focusRingProps, getMenuProps())}
      className={customClassNames.dropdownClassName}
    >
      {open && options}
    </Box>
  );
};

export default Dropdown;
