import { createContext } from 'react';
import type { ArticlesType } from './ArticlesContextProvider';

interface Ctx {
  articles: ArticlesType[];
  totalResults: number;
  handleFetchArticles: (
    language?: string,
    sortBy?: string,
    pageSize?: string,
    content?: string
  ) => void;
}

export const ctxPrototype: Ctx = {
  articles: [],
  totalResults: 0,
  handleFetchArticles: () => {},
};

export const ArticlesContext = createContext<Ctx>(ctxPrototype);
