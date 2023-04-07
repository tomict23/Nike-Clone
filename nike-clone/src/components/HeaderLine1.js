import '../styles/HeaderLine1.css';
import jordanLogo from '../jordan.svg';
import converseLogo from '../converse.svg';

const HeaderLine1 = () => {
  const hoveredOver = (event) => {
    event.target.style.opacity = .5;
  }
  const hoveredOut = (event) => {
    event.target.style.opacity = 1;
  }

  return (
    <div className='HeaderLine1Base'>
      <div className='HeaderLine1'>
        <div className="branditems">
          <div className='brand-item' onMouseOver={hoveredOver} onMouseOut={hoveredOut}>
            <img
              src={jordanLogo}
              alt='jordan-logo'
            />
          </div>
        <div className='brand-item' onMouseOver={hoveredOver} onMouseOut={hoveredOut}>
          <img
            src={converseLogo}
            alt='converse-logo'
          />
        </div>
      </div>
        <div className='headermenu1'>
          <div className="menuoption">
          <div className='menuText' onMouseOver={hoveredOver} onMouseOut={hoveredOut}>
              Find a Store
            </div>
            <div id="spacer">
              |
            </div>
          </div>
          <div className="menuoption">
          <div className='menuText' onMouseOver={hoveredOver} onMouseOut={hoveredOut}>
              Help
            </div>
            <div id="spacer">
              |
            </div>
          </div>
          <div className="menuoption">
            <div className='menuText' onMouseOver={hoveredOver} onMouseOut={hoveredOut}>
              Join Us
            </div>
            <div id="spacer">
              |
            </div>
          </div>
          <div className="menuoption">
          <div className='menuText' onMouseOver={hoveredOver} onMouseOut={hoveredOut}>
              Sign In
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeaderLine1;
