import '../styles/HeaderLine1.css';
import jordanLogo from '../jordan.svg';
import converseLogo from '../converse.svg';

const HeaderLine1 = () => {
  return (
    <>
      <div className='HeaderLine1'>
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
    </>
  );
};

export default HeaderLine1;
