import './ArticlesContainer.css';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticlesContainer = ({ articles }) => {
  const cards = articles.map(article => {
    return (
      <ArticleCard
        key={ article.published_date }
        image={ article.multimedia[1].url }
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