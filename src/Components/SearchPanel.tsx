import { useContext, useState } from 'react';
import { ArticlesContext } from '../store/ArticlesContext';
import Button from './Button';
import FormWrapper from './FormWrapper';
import Options from './Options/Options';

type LanguageType =
  | 'ar'
  | 'de'
  | 'en'
  | 'es'
  | 'fr'
  | 'he'
  | 'it'
  | 'nl'
  | 'no'
  | 'pt'
  | 'ru'
  | 'sv'
  | 'ud'
  | 'zh';

type SortByType = 'relevancy' | 'popularity' | 'publishedAt';

const SearchPanel = () => {
  const { handleFetchArticles, currentTopic } = useContext(ArticlesContext);
  const [pageSize, setPageSize] = useState<string>('10');
  const [language, setLanguage] = useState<LanguageType>('en');
  const [sortBy, setSortBy] = useState<SortByType>('publishedAt');

  return (
    <>
      <Options />

      <div className="w-full flex flex-wrap gap-5 items-center justify-start content-center">
        <FormWrapper>
          <label htmlFor="page-size">Page size:</label>
          <select
            value={pageSize}
            id="page-size"
            onChange={(e) => setPageSize(e.target.value)}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </FormWrapper>
        <FormWrapper>
          <label htmlFor="lang">Language:</label>
          <select
            value={language}
            id="lang"
            onChange={(e) => setLanguage(e.target.value as typeof language)}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="ru">Russian</option>
            <option value="zh">Chinese</option>
          </select>
        </FormWrapper>
        <FormWrapper>
          <label htmlFor="sort-by">Sort by:</label>
          <select
            value={sortBy}
            id="sort-by"
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          >
            <option value="publishedAt">Latest</option>
            <option value="popularity">Popularity</option>
            <option value="relevancy">Relevancy</option>
          </select>
        </FormWrapper>
      </div>

      <Button
        label="Search articles"
        handleClick={() =>
          handleFetchArticles(language, sortBy, pageSize, currentTopic)
        }
      />
    </>
  );
};

export default SearchPanel;
