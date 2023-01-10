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
  const [sortValue, setSortValue] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchAllData('home')
      .then(data => setArticles(data.results));
  }, []);

  const handleSearch = (event) => {
    const search = event.target.value;
    setSearchValue(search);
    setSortValue(null);
  };

  const handleSort = (event) => {
    const section = event.target.value;
    setSortValue(section);
    setSearchValue('');
  };

  const sortedArticles = articles.reduce((list, article) => {
    const matchSection = article.section === sortValue;
    const matchSubsection = article.subsection === sortValue;

    if ((matchSection || matchSubsection) && !list.includes(article)) {
      list.push(article);
    }
    return list;
  }, []);


  const searchResults = articles.reduce((list, article) => {
    const changeTitleCase = article.title.toLowerCase();
    if (changeTitleCase.includes(searchValue) && !list.includes(article)) {
      list.push(article);
    }
    return list;
  }, []);

  const articlesWithIds = articles.map((article, index) => {
    if (!article.id) {
      article.id = (index + 1).toString();
    }
    return article;
  });

  const clearInputs = (event) => {
    event.preventDefault();
    setSortValue(null);
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
              articles={ articlesWithIds }
              searchValue={ searchValue }
              sortValue={ sortValue }
              handleSearch={ handleSearch }
              handleSort={ handleSort }
              clearInputs={ clearInputs }
            />
            <ArticlesContainer
              articles={ articlesWithIds }
              sortedArticles={ sortedArticles }
              searchResults={ searchResults }
            />
          </section>
        </Route>
        <Route
          path='/:id'
          render={ ({ match }) => {
            const findArticle = articlesWithIds.find(article => article.id === match.params.id);
            return <ArticleDetails articleData={ findArticle } />;
          } }
        />
      </Switch>
    </main>
  );
};

export default App;
