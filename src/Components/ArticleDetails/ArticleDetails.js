import { Link } from 'react-router-dom';
import './ArticleDetails.css';
import nytSymbol from '../../assets/Symbol-New-York-Times.webp';

const ArticleDetails = ({ articleData }) => {
  if (!articleData) {
    return <h1>Loading...</h1>;
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const getDate = articleData.published_date.split('T')[0];
  const reverseDate = getDate.split('-').reverse();
  const removeZeros = reverseDate.map(value => {
    if (value[0] === '0') {
      return value.slice(1);
    }
    return value;
  });
  const formatDate = `${removeZeros[0]} ${months[parseInt(removeZeros[1])]} ${removeZeros[2]}`;

  // 'Is Matcha Good for You?' and 'How Can I Stop Snoring' are not viewing properly

  return (
    <section className='details-view'>
      <img src={ !articleData.multimedia ? nytSymbol : articleData.multimedia[0].url } alt={ articleData.title } className='details-image' />
      <div className='details-info'>
        <p>This Article's Content</p>
        <div className='sections'>
          <p className='section-name'>{ articleData.section }</p>
          { articleData.subsection && <p className='section-name'>{ articleData.subsection }</p> }
        </div>
        <p></p>
        <h1>{ articleData.title }</h1>
        <p>{ articleData.byline }</p>
        <p>First Published: { formatDate }</p>
        <p>{ articleData.abstract }</p>
        <a href={ articleData.url } target='_blank' rel='noreferrer'><p>Click here to view the full article</p></a>
        <Link to='/'>
          <button className='home-button'>Back to Top Stories</button>
        </Link>
      </div>
    </section>
  );
};

export default ArticleDetails;