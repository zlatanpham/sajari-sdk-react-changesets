import 'twin.macro';

import { styled as styledImport } from '@tpham0/react-sdk-utils';

declare module 'twin.macro' {
  const styled: typeof styledImport;
}
