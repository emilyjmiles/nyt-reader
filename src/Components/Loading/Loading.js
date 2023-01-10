import './Loading.css';

import loading from '../../assets/loading-nyt-app.mp4';

const Loading = () => {
  // Maybe use setTimeout method when animation works so you can view it longer?

  return (
    <section className='loading-section'>
      <h1 className='loading-content'>Loading content...</h1>
      <video autoPlay muted loop preload='auto' className='loading'>
        <source src={ loading } type='video/mp4' />
      </video>
    </section>
  );
};

export default Loading;