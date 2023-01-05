import './Header.css';
import logo from '../../assets/New-York-Times-logo.webp';

const Header = () => {
  return (
    <section className='header-section'>
      <img src={ logo } alt='logo' className='logo' />
      <h1 className='reader'>Reader</h1>
    </section>
  );
};

export default Header;