import './Header.css';
import logo from '../../assets/nyt-reader-logo.webp';

const Header = () => {
  return (
    <section className='header-section'>
      <img src={ logo } alt='logo' className='logo' data-cy='logo' width='900' height='157' />
    </section>
  );
};

export default Header;