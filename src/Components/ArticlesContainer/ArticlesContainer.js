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
        key={ article.published_date }
        image={ !article.multimedia ? nytSymbol : article.multimedia[1].url }
        title={ article.title }
        summary={ article.abstract }
        author={ article.byline }
      />
    );
  });

  return (
    <section className='articles-container'>
      { cards }
    </section>
  );
};

export default ArticlesContainer;