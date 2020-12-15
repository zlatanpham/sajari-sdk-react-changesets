import { Config } from './Config';
import { FilterBuilder, Pipeline, RangeFilterBuilder, Response, Variables } from './controllers';

export type SearchFn = (query?: string, override?: boolean) => void;
export type ClearFn = (variables?: { [k: string]: string | undefined }) => void;
export type ResultClickedFn = (url: string) => void;
export type PaginateFn = (page: number) => void;
export type ResultViewType = 'grid' | 'list';

export interface PipelineContextState {
  variables: Variables;
  pipeline: Pipeline;
  response: Response | null;
  query: string;
  completion: string;
  suggestions: string[];
  config: Config;
  search: SearchFn;
  clear: ClearFn;
  fields?: FieldDictionary;
  searching: boolean;
  filters?: (FilterBuilder | RangeFilterBuilder)[];
}

export interface ProviderPipelineConfig {
  pipeline: Pipeline;
  variables?: Variables;
  config?: Config;
  fields?: FieldDictionary;
  filters?: (FilterBuilder | RangeFilterBuilder)[];
}

export interface ProviderPipelineState {
  response: Response | null;
  query: string;
  config: Config;
  completion: string;
  suggestions: string[];
}

export interface SearchProviderValues {
  search: ProviderPipelineConfig;
  autocomplete?: ProviderPipelineConfig;
  searchOnLoad?: boolean;
  initialResponse?: string;
}

export interface PipelineProviderState {
  search: ProviderPipelineState;
  autocomplete: ProviderPipelineState;
}

export interface Context {
  search: PipelineContextState;
  autocomplete: PipelineContextState;
  resultClicked: ResultClickedFn;
  paginate: PaginateFn;
  setViewType: (v: ResultViewType) => void;
  viewType: ResultViewType;
}

type Field = ((data: Record<string, any>) => any) | string | string[] | false;
export class FieldDictionary {
  id?: Field;

  url?: Field;

  title?: Field;

  subtitle?: Field;

  description?: Field;

  image?: Field;

  // e-commerce related fields

  price?: Field;

  rating?: Field;

  inventory?: Field;

  constructor(input?: FieldDictionary) {
    const {
      id = '_id',
      url = 'url',
      title = 'title',
      subtitle = 'url',
      description = 'description',
      image = 'image',
      price = 'price',
      rating = 'rating',
      inventory = 'inventory',
    } = input ?? {};

    this.id = id;
    this.url = url;
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.image = image;
    this.price = price;
    this.rating = rating;
    this.inventory = inventory;
  }
}