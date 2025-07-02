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
];

const Options = () => {
  const { handleFetchArticles, setCurrentTopic, currentTopic } =
    useContext(ArticlesContext);
  return (
    <section className="w-[80%] max-w-5xl h-auto flex justify-start items-center flex-row flex-wrap gap-x-2.5">
      {LABELS.map((label) => (
        <Option
          label={label}
          isSelected={
            currentTopic.trim().toLowerCase() === label.trim().toLowerCase()
          }
          key={label}
          onClick={() => {
            handleFetchArticles(undefined, undefined, undefined, label);
            setCurrentTopic(label);
          }}
        />
      ))}
    </section>
  );
};

export default Options;
