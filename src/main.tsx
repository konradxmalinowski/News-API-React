import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ArticlesContextProvider } from './store/ArticlesContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArticlesContextProvider>
      <App />
    </ArticlesContextProvider>
  </StrictMode>
);
