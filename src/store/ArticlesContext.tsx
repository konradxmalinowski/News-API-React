import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { ArticlesType } from './ArticlesContextProvider';

interface Ctx {
  currentTopic: string;
  setCurrentTopic: Dispatch<SetStateAction<string>>;
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
  currentTopic: 'Technology',
  setCurrentTopic: () => {},
  articles: [],
  totalResults: 0,
  handleFetchArticles: () => {},
};

export const ArticlesContext = createContext<Ctx>(ctxPrototype);
