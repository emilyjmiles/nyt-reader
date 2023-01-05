import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ image, title, date }) => {
  const formatDate = date.split('T')[0];

  return (
    <Link to={ title } className='article-card'>
      <img src={ image } alt={ title } className='article-image' />
      <div className='article-snippet'>
        <h1 className='title'>{ title }</h1>
        <p>{ formatDate }</p>
      </div>
    </Link>
  );
};

export default ArticleCard;