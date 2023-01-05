import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAllData } from '../../apiCalls';

import './App.css';
import Header from '../Header/Header';
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';
import ArticleDetails from '../ArticleDetails/ArticleDetails';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchAllData('home')
      .then(data => setArticles(data.results));
  }, []);

  return (
    <main>
      <Header />
      <Switch>
        <Route
          exact path='/'
          render={ () => <ArticlesContainer articles={ articles } /> }
        />
        <Route
          path='/:title'
          render={ ({ match }) => {
            const findArticle = articles.find(article => article.title === match.params.title);
            return <ArticleDetails articleData={ findArticle } />;
          } }
        />
      </Switch>
    </main>
  );
};

export default App;
