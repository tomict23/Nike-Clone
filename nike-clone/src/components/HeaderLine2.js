import '../styles/HeaderLine1.css';
import nikeLogo from '../nike.svg';

const HeaderLine2 = () => {
  return (
    <>
      <div className='HeaderLine2'>
        <img
          src={nikeLogo}
          className='nike-logo'
          alt='nike-logo'
        />
      </div>
    </>
  );
};

export default HeaderLine2;
