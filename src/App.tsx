import { useContext } from 'react';
import Articles from './Components/Articles';
import SearchPanel from './Components/SearchPanel';
import { ArticlesContext } from './store/ArticlesContext';

const App = () => {
  const { totalResults } = useContext(ArticlesContext);

  return (
    <div className="w-full md:w-[51%] max-w-5xl min-w-80 h-auto flex flex-col justify-center items-start gap-8 mb-5">
      <h1 className="text-3xl font-semibold">All Posts ({totalResults})</h1>
      <SearchPanel />
      <Articles />
    </div>
  );
};

export default App;
