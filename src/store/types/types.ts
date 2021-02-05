import { PackageMeta } from '@/types/types';

export interface SearchState {
  init: boolean;
  loading: boolean;
  query: string;
  results: PackageMeta[];
  total: number;
}

export interface PackageViewState extends PackageMeta{
  loaded: boolean;
  error: boolean;
  links: {
    npm: string;
    repository: string;
  };
}

export interface RootState {
  state: {
    search: SearchState;
    packageView: PackageViewState;
  };
}
