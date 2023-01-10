import { Link } from 'react-router-dom';
import './ArticleDetails.css';
import Loading from '../Loading/Loading';
import nytSymbol from '../../assets/Symbol-New-York-Times.webp';

const ArticleDetails = ({ articleData }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (!articleData) {
    return (
      <section className='details-view'>
        <Loading />
        <Link to='/'>
          <button className='home-button'>Back to Top Stories</button>
        </Link>
      </section>
    );
  }

  const formatDates = (date) => {
    const getDate = date.split('T')[0];
    const reverseDate = getDate.split('-').reverse();
    const removeZeros = reverseDate.map(value => {
      if (value[0] === '0') {
        return value.slice(1);
      }
      return value;
    });

    return `${removeZeros[0]} ${months[parseInt(removeZeros[1] - 1)]} ${removeZeros[2]}`;
  };

  const keywords = articleData.des_facet.concat(articleData.geo_facet, articleData.org_facet, articleData.per_facet);

  const getKeywords = keywords.map((word, index) => {
    return <p key={ index } className='words single-keyword'>{ word }</p>;
  });

  return (
    <section className='details-view' data-cy='details-view'>
      <div className='image-section'>
        <img
          src={ !articleData.multimedia ? nytSymbol : articleData.multimedia[1].url }
          alt={ articleData.title }
          className='details-image'
          width={ articleData.multimedia[1].width }
          height={ articleData.multimedia[1].height }
        />
        { articleData.multimedia && articleData.multimedia[1].caption
          && <p className='image-caption'><b>Photo Caption:</b> { articleData.multimedia[1].caption }</p>
        }
      </div>
      <div className='details-info'>
        { articleData.subsection ? <p><b>Sections</b></p> : <p><b>Section</b></p> }
        <div className='word-container'>
          <p className='words section-name'>{ articleData.section }</p>
          { articleData.subsection && <p className='words section-name'>{ articleData.subsection }</p> }
        </div>
        <h1 className='details-title'>{ articleData.title }</h1>
        <p>{ articleData.byline }</p>
        <p><b>First Published:</b> { formatDates(articleData.published_date) }</p>
        <p><b>Last Updated:</b> { formatDates(articleData.updated_date) }</p>
        <p><b>Article Abstract:</b> { articleData.abstract }</p>
        <h2>Article Content Keywords</h2>
        <div className='word-container'>
          { articleData.subsection && getKeywords }
        </div>
        <a href={ articleData.url } target='_blank' rel='noreferrer'><p>Click here to view the full article</p></a>
        <Link to='/'>
          <button className='home-button'>Back to Top Stories</button>
        </Link>
      </div>
    </section>
  );
};

export default ArticleDetails;