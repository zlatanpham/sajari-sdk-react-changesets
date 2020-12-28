import { SearchProviderValues } from '@tpham0/react-hooks';
import { ThemeProviderProps } from '@tpham0/react-sdk-utils';

export interface SearchUIContextProviderValues {
  /** Maximum possible rating value */
  ratingMax?: number;
  /** Currency code to use for any price display */
  currency?: string;
  disableDefaultStyles?: boolean;
  customClassNames?: {
    results?: {
      container?: string;
      item?: string;
      heading?: string;
      price?: string;
      subTitle?: string;
      rating?: string;
      description?: string;
      searchingMessage?: string;
      emptyMessage?: string;
      errorMessage?: string;
    };
    sorting?: {
      container?: string;
      label?: string;
      select?: string;
    };
    pagination?: {
      container?: string;
      button?: string;
      active?: string;
      next?: string;
      prev?: string;
      spacerEllipsis?: string;
    };
    viewType?: {
      container?: string;
      label?: string;
      buttonGroup?: string;
    };
    resultsPerPage?: {
      container?: string;
      label?: string;
      select?: string;
    };
    input?: {
      container?: string;
      inputContainer?: string;
      input?: string;
      voiceInput?: string;
      dropdown?: string;
      dropdownItem?: string;
      dropdownSelectedItem?: string;
      dropdownHighlightItem?: string;
      dropdownList?: string;
      dropdownFooter?: string;
      result?: string;
      resultImageContainer?: string;
      resultTextContainer?: string;
      selectedResult?: string;
      typeahead?: string;
    };
    filter?: {
      box?: string;
      header?: string;
      title?: string;
      resetButton?: string;
      rating?: {
        container?: string;
        activeRatingItem?: string;
        activeHalfRatingItem?: string;
      };
      color?: {
        container?: string;
        itemChecked?: string;
        item?: string;
      };
      tabs?: {
        container?: string;
        list?: string;
        tab?: string;
        selectedTab?: string;
      };
      list?: {
        container?: string;
        searchFilter?: string;
        checkboxGroup?: string;
        radioGroup?: string;
        toggleButton?: string;
      };
      range?: {
        container?: string;
        handle?: string;
        fill?: string;
        track?: string;
        input?: string;
        handleActive?: string;
      };
    };
  };
}

export interface ContextProviderValues
  extends SearchProviderValues,
    ThemeProviderProps,
    SearchUIContextProviderValues {}
