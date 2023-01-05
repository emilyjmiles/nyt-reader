import './ArticlesContainer.css';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticlesContainer = ({ articles }) => {
  console.log(articles);

  const cards = articles.map(article => {
    return (
      <ArticleCard
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