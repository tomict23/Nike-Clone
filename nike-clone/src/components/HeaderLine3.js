import '../styles/HeaderLine3.css';
import React, { useState } from 'react';

const HeaderLine3 = () => {
  const [hovered, setHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hoveredOver = (event) => {
    setHovered(true);
  }
  const hoveredOut = (event) => {
    setHovered(false);
  }
  const hoveredOver1 = (event) => {
    setIsHovered(true)
  }
  const hoveredOut1 = (event) => {
    setIsHovered(false)
  }
  const opacity = {
    opacity: hovered ? 1 : .5
  }
  const opacity1 = {
    opacity: isHovered ? 1 : .5
  }
  return (
    <>
      <div className="HeaderLine3">
      
        <div className="centerBanner">
        <button onMouseOver={hoveredOver} onMouseOut={hoveredOut} style={opacity} type="button" className='arrow'>
            <div className="icon">
              <svg fill="#111" height="14px" width="14px" viewBox="0 0 185.4 300">
                <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z">
                </path>
              </svg>
            </div>
          </button>
          <div className="banner">
          
            <ul className="slider">
              <div className='slider_nodes'>
                  <div className="slider_node">
                    <span class="slider_text">Save Up to 50%</span>
                    <a class="slider_link" href="https://www.nike.com/w/sale-3yaep">No code required. Ends 4.8.</a>
                  </div>
              </div>
            </ul>
            </div>
            <button onMouseOver={hoveredOver1} onMouseOut={hoveredOut1} style={opacity1} type="button" className = 'arrow'>
                <div className="icon">
                  <svg fill="#111" height="14px" width="14px" viewBox="0 0 185.4 300">
                    <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z">
                    </path>
                  </svg>
                </div>
              </button>
          </div>
        </div>
    </>
  );
};

export default HeaderLine3;
