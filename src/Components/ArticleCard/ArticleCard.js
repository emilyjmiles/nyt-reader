import './ArticleCard.css';

const ArticleCard = ({ image, title, date, summary, author }) => {
  return (
    <section className='article-card'>
      <img src={ image } alt={ title } className='article-image' />
      <h1>{ title }</h1>
      <p>{ summary }</p>
      <h3>{ author }</h3>
    </section>
  );
};

export default ArticleCard;