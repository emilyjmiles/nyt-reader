import { useEffect, useState } from 'react';
import { fetchAllData } from '../../apiCalls';

import './App.css';
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';
import Header from '../Header/Header';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchAllData('home')
      .then(data => setArticles(data.results));
  }, []);

  return (
    <main>
      <Header />
      <ArticlesContainer articles={ articles } />
    </main>
  );
};

export default App;
