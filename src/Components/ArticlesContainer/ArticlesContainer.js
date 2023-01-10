import './ArticlesContainer.css';
import Loading from '../Loading/Loading';
import ArticleCard from '../ArticleCard/ArticleCard';
import nytSymbol from '../../assets/Symbol-New-York-Times.webp';

const ArticlesContainer = ({ articles, sortedArticles, searchResults }) => {
  const displayAllArticles = articles.length === searchResults.length && !sortedArticles.length;
  const displaySearchResults = articles.length !== searchResults.length && !sortedArticles.length;
  const noResultsFound = (articles || sortedArticles || searchResults) && !searchResults.length;
  // May want to try and dry up the variables. Maybe make them into a method instead since they are so similar?

  if ((!articles || !sortedArticles || !searchResults) && !noResultsFound) {
    return <Loading />;
  }

  const getArticleCards = (articlesList) => {
    return articlesList.map(article => {
      return (
        <ArticleCard
          key={ article.id }
          id={ article.id.toString() }
          image={ !article.multimedia ? nytSymbol : article.multimedia[2] }
          title={ article.title }
          date={ article.published_date }
        />
      );
    });
  };

  return (
    <section className='articles-container'>
      <div className='card-container'>
        { displayAllArticles && getArticleCards(articles) }
        { displaySearchResults && getArticleCards(searchResults) }
        { sortedArticles.length > 0 && getArticleCards(sortedArticles) }
        { noResultsFound && <h1 className='search'>No results found. Please try your search again.</h1> }
      </div>
    </section>
  );
};

export default ArticlesContainer;