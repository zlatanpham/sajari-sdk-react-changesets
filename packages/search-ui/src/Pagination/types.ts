import { BoxProps, PaginationProps as PurePaginationProps } from '@tpham0/react-components';

export interface PaginationProps
  extends BoxProps,
    Pick<PurePaginationProps, 'align' | 'scrollToTop' | 'scrollTarget' | 'compact'> {}
