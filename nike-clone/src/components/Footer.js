import '../styles/Footer.css';
import locatorSVG from '../styles/svgs/locator.svg';

const linksLeft = ['GIFT CARDS', 'PROMOTIONS', 'FIND A STORE', 'SIGN UP FOR EMAIL', 'BECOME A MEMBER', 'NIKE JOURNAL', 'SEND US FEEDBACK'];
const linksMiddle = ['Order Status', 'Shipping and Delivery', 'Returns', 'Payment Options', 'Gift Card Balance', 'Contact Us'];
const linksRight = ['News', 'Careers', 'Investors', 'Purpose', 'Sustainability'];
const Footer = () => {
  return (
    <>
      <footer className='Footer'>
        <div id='footer-top'>
          <div className='accordion-body'>
            {linksLeft.map((link) => (
              <p className='link-bold'>{link}</p>
            ))}
          </div>
          <div
            className='accordion-body'
            id='get-help-section'
          >
            <p className='link-bold'>GET HELP</p>
            {linksMiddle.map((link) => (
              <p className='link-gray'>{link}</p>
            ))}
          </div>
          <div
            className='accordion-body'
            id='about-nike-section'
          >
            <p className='link-bold'>ABOUT NIKE</p>
            {linksRight.map((link) => (
              <p className='link-gray'>{link}</p>
            ))}
          </div>
        </div>
        <div id='footer-bottom'>
          <div id='loc-copy'>
            <div id='location'>
              <div id='locator-svg'>
                <img
                  src={locatorSVG}
                  alt='locator-svg'
                />
              </div>
              <p id='curr-country'>United States</p>
            </div>
            <p id='copyright-disc'>© 2023 Nike, Inc. All Rights Reserved</p>
          </div>
          <div id='footer-bottom-right'>footer bottom right</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
