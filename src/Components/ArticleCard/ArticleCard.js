import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ image, title, date }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const getDate = date.split('T')[0];
  const reverseDate = getDate.split('-').reverse();
  const removeZeros = reverseDate.map(value => {
    if (value[0] === '0') {
      return value.slice(1);
    }
    return value;
  });
  const formatDate = `${removeZeros[0]} ${months[parseInt(removeZeros[1] - 1)]} ${removeZeros[2]}`;

  return (
    <Link to={ title } className='article-card'>
      <img src={ image } alt={ title } className='article-image' />
      <div className='article-snippet'>
        <h2 className='title'>{ title }</h2>
        <p>{ formatDate }</p>
      </div>
    </Link>
  );
};

export default ArticleCard;