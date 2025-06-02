import { useContext } from 'react';
import Option from './Option';
import { ArticlesContext } from '../../store/ArticlesContext';

const LABELS = [
  'technology',
  'health',
  'science',
  'bitcoin',
  'artificial intelligence',
  'sports',
  'business',
  'economy',
  'climate change',
  'movies',
  'education',
  'gaming',
  'politics',
  'travel',
  'space',
];

const Options = () => {
  const { articles, handleFetchArticles } = useContext(ArticlesContext);

  const getQuantityByLabel = (label: string) => {
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(label.toLowerCase()) ||
        article.description?.toLowerCase().includes(label.toLowerCase()) ||
        article.content?.toLowerCase().includes(label.toLowerCase())
    ).length;
  };

  return (
    <section className="w-[80%] max-w-5xl h-auto flex justify-center items-center mb-5 flex-row flex-wrap gap-x-2.5">
      {LABELS.map((label) => (
        <Option
          label={label}
          quantity={getQuantityByLabel(label)}
          key={label}
          onClick={() =>
            handleFetchArticles(undefined, undefined, undefined, label)
          }
        />
      ))}
    </section>
  );
};

export default Options;
