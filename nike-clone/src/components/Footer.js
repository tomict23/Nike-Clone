import '../styles/Footer.css';
import locatorSVG from '../styles/svgs/locator.svg';

const linksLeft = ['GIFT CARDS', 'PROMOTIONS', 'FIND A STORE', 'SIGN UP FOR EMAIL', 'BECOME A MEMBER', 'NIKE JOURNAL', 'SEND US FEEDBACK'];
const Footer = () => {
  return (
    <>
      <footer className='Footer'>
        <div className='accordion-body'>
          {linksLeft.map((link) => (
            <p className='link-bold'>{link}</p>
          ))}
        </div>
        <div id='location'>
          <div id='locator-svg'>
            <img
              src={locatorSVG}
              alt='locator-svg'
            />
          </div>
          <p id='curr-country'>United States</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
