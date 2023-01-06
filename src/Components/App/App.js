import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAllData } from '../../apiCalls';

import './App.css';
import Header from '../Header/Header';
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import SearchForm from '../SearchForm/SearchForm';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sortValue, setSortValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [articlesBySection, setArticlesBySection] = useState([]);
  const [articlesSearch, setArticlesSearch] = useState([]);

  useEffect(() => {
    fetchAllData('home')
      .then(data => setArticles(data.results));
  }, []);

  const handleSearch = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchValue(search);
  };

  const handleSort = (event) => {
    const section = event.target.value.toLowerCase();
    setSortValue(section);
  };

  // articles.filter(article => {
  //   if (article.section === sortValue || article.subsection === sortValue) {
  //     setArticlesBySection([...articlesBySection, article]);
  //   }
  //   return articlesBySection;
  // });

  const clearInputs = (event) => {
    event.preventDefault();
    setSortValue('');
    setSearchValue('');
  };

  return (
    <main>
      <Header />
      <Switch>
        <Route exact path='/'>
          <section className='main-page'>
            <h1 className='top-stories'>Today's Top Stories</h1>
            <SearchForm
              articles={ articles }
              searchValue={ searchValue }
              sortValue={ sortValue }
              handleSearch={ handleSearch }
              handleSort={ handleSort }
              clearInputs={ clearInputs }
            />
            <ArticlesContainer articles={ articles } />
          </section>
        </Route>
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
