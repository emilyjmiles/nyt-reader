import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ image, title, summary, author }) => {
  return (
    <Link to={ title } className='article-card'>
      <img src={ image } alt={ title } className='article-image' />
      <h1>{ title }</h1>
      <p>{ summary }</p>
      <h3>{ author }</h3>
    </Link>
  );
};

export default ArticleCard;