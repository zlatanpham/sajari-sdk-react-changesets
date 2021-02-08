import { BoxProps, TextProps } from '@tpham0/react-components';

export interface SummaryProps extends BoxProps, Omit<TextProps, 'children'> {
  /** Show the query override text */
  suggest?: boolean;
  /** Show the search latency  */
  showLatency?: boolean;
}
