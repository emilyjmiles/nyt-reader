import './ArticlesContainer.css';
import ArticleCard from '../ArticleCard/ArticleCard';
import nytSymbol from '../../assets/Symbol-New-York-Times.webp';

const ArticlesContainer = ({ articles }) => {
  if (!articles) {
    return <h1>Loading...</h1>;
  }

  const cards = articles.map(article => {
    return (
      <ArticleCard
        key={ article.uri }
        image={ !article.multimedia ? nytSymbol : article.multimedia[1].url }
        title={ article.title }
        date={ article.published_date }
      />
    );
  });

  return (
    <section className='articles-container'>
      <div className='card-container'>
        { cards }
      </div>
    </section>
  );
};

export default ArticlesContainer;