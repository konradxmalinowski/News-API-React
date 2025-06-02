import { useEffect, useState } from 'react';
import { API_KEY } from '../utils/API.ts';
import { ArticlesContext } from './ArticlesContext.tsx';

export interface ArticlesType {
  source: { id: string | null; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface UseStateType {
  articles: ArticlesType[];
  totalResults: number;
}

const UseStatePrototype: UseStateType = {
  articles: [],
  totalResults: 0,
};

interface validatedUserDataType {
  language: string;
  sortBy: string;
  pageSize: string;
  content: string;
}

export const ArticlesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [response, setResponse] = useState<UseStateType>({
    ...UseStatePrototype,
  });

  const fetchArticles = async (
    language: string = 'en',
    sortBy: string = 'publishedAt',
    pageSize: string = '10',
    content: string = 'bitcoin'
  ) => {
    const validateUserData = (): validatedUserDataType => {
      console.log(language, sortBy, pageSize, content);
      return {
        language: encodeURIComponent(language),
        sortBy: encodeURIComponent(sortBy),
        pageSize: encodeURIComponent(pageSize),
        content: encodeURIComponent(content),
      };
    };

    const {
      language: validatedLanguage,
      sortBy: validatedSortBy,
      pageSize: validatedPageSize,
      content: validatedContent,
    } = validateUserData();

    try {
      const response: Response = await fetch(
        `https://newsapi.org/v2/everything?q=${validatedContent}&pageSize=${validatedPageSize}&language=${validatedLanguage}&sortBy=${validatedSortBy}&apiKey=${API_KEY}`
      );

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ArticlesContext
      value={{
        articles: response.articles,
        totalResults: response.totalResults,
        handleFetchArticles: fetchArticles,
      }}
    >
      {children}
    </ArticlesContext>
  );
};
