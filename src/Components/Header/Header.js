import './Header.css';
import logo from '../../assets/nyt-reader-logo.webp';

const Header = () => {
  return (
    <section className='header-section'>
      <img src={ logo } alt='logo' className='logo' />
    </section>
  );
};

export default Header;