import { useState, useEffect } from 'react';
import { fetchSingleArticle } from '../../apiCalls';

import './ArticleDetails.css';

const ArticleDetails = ({ articleData }) => {
  const [queryResults, setQueryResults] = useState([]);

  // fetchSingleArticle(articleData.title)
  //   .then(data => setQueryResults(data.response.docs));

  return (
    <section>
      <img src={ articleData.multimedia[0].url } alt={ articleData.title } />
      <h1>{ articleData.title }</h1>
      <h2>{ articleData.byline }</h2>
      <h3>Date goes here</h3>
      <p></p>
    </section>
  );
};

export default ArticleDetails;