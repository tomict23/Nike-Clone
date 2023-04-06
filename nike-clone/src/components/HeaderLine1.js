import '../styles/HeaderLine1.css';
import jordanLogo from '../jordan.svg';
import converseLogo from '../converse.svg';

const HeaderLine1 = () => {
  return (
    <>
      <div className='HeaderLine1'>
        <div className="branditems">
          <div className='brand-item'>
            <img
              src={jordanLogo}
              alt='jordan-logo'
            />
          </div>
        <div className='brand-item'>
          <img
            src={converseLogo}
            alt='converse-logo'
          />
        </div>
      </div>
        <div className='headermenu1'>
          <div className="menuoption">
            Find a Store
            <div id="spacer">
              |
            </div>
          </div>
          <div className="menuoption">
            Help
            <div id="spacer">
              |
            </div>
          </div>
          <div className="menuoption">
            Join Us
            <div id="spacer">
              |
            </div>
          </div>
          <div className="menuoption">
            Sign In
          </div>

        </div>
      </div>
    </>
  );
};

export default HeaderLine1;
