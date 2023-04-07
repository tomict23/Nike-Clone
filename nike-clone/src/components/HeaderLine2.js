import '../styles/HeaderLine2.css';
<<<<<<< HEAD
import nikeLogo from '../styles/svgs/nike.svg';

=======
import nikeLogo from '../nike.svg';
import React, { useState } from 'react';
>>>>>>> 078f0289ae21f8a70bbc9fbee45cc53b2da1bef6
const HeaderLine2 = () => {
  const [hovered, setHovered] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const hoveredOver = (event) => {
    event.target.style.opacity = .5;
  }
  const hoveredOut = (event) => {
    event.target.style.opacity = 1;
  }
  const hoveredOver1 = (event) => {
    event.target.style.background = '#e5e5e5';
  }
  const hoveredOut1 = (event) => {
    event.target.style.background = '#ffffff';
  }
  const hoveredOverColor = (event) => {
    setHovered(true)
  }
  const hoveredOutColor = (event) => {
    setHovered(false)
  }
  const hoveredOverColor1 = (event) => {
    setIsHovered(true)
    setHovered(true)
  }
  const hoveredOutColor1 = (event) => {
    setIsHovered(false)
    setHovered(false)
  }
  const mouseOverMenu = () => {
    setShowDropdown(true)
    document.querySelector('.hero-container').style.filter = 'blur(5px)';
    document.querySelector('.Footer').style.filter = 'blur(5px)';
  }
  const mouseOutMenu = () => {
    setShowDropdown(false)
    document.querySelector('.hero-container').style.filter = 'none';
    document.querySelector('.Footer').style.filter = 'none';
  }
  const backgroundStyle1 = {
    backgroundColor: isHovered ? '#e5e5e5' : '#f5f5f5'
  }
  const backgroundStyle = {
    backgroundColor: hovered ? '#e5e5e5' : '#f5f5f5'
  }
  return (
    <div className='Headerline2Container'>
      <div className='HeaderLine2'>
        <div className="nikeLogoContainer">
          <svg onMouseOver={hoveredOver} onMouseOut={hoveredOut} className="nikeLogo" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd">
                </path>
            </svg>
        </div>
        <div className='headermenu2'>
<<<<<<< HEAD
          <div className='menuitem2'>New & Featured</div>
          <div className='menuitem2'>Men</div>
          <div className='menuitem2'>Women</div>
          <div className='menuitem2'>Kids</div>
          <div className='menuitem2'>Accessories</div>
          <div className='menuitem2'>Sale</div>
=======
          <div onMouseOver={mouseOverMenu} onMouseOut={mouseOutMenu} className='menuitem2'>
            New & Featured
            <div className={`dropdownHeader2 ${showDropdown ? 'show' : ''}`}>
              <div>
                New Arrivals
                <div>
                  Shop all
                </div>
                <div>
                  SNKRS Launch Calendar
                </div>
                <div>
                  New & Upcoming Drops
                </div>
              </div>
              <div>
                Featured
                <div>
                  80's Inspired Collection
                </div>
                <div>
                  Picks for Prom
                </div>
                <div>
                  USWNT Jerseys
                </div>
                <div>
                  New in Running
                </div>
                <div>
                  Member Exclusive
                </div>
              </div>
            </div>
          </div>
          <div className='menuitem2'>
            Men
          </div>
          <div className='menuitem2'>
            Women
          </div>
          <div className='menuitem2'>
            Kids
          </div>
          <div className='menuitem2'>
            Accessories
          </div>
          <div className='menuitem2'>
            Sale
          </div>
>>>>>>> 078f0289ae21f8a70bbc9fbee45cc53b2da1bef6
        </div>
        
        <div className='twoIcons'>
        <div className='searchMenu'>
<<<<<<< HEAD
          <svg
            aria-hidden='true'
            class='searchIcon'
            focusable='false'
            viewBox='0 0 24 24'
            role='img'
            width='24px'
            height='24px'
            fill='none'
          >
            <path
              stroke='currentColor'
              stroke-width='1.5'
              d='M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853'
            ></path>
          </svg>
          <input
            type='text'
            id='VisualSearchInput'
            class='pre-search-input headline-5'
            name='search'
            autocomplete='off'
            data-var='vsInput'
            tabindex='0'
            placeholder='Search'
            aria-label='Search Products'
            role='combobox'
            aria-controls='VisualSearchSuggestionsList'
            aria-owns='VisualSearchSuggestionsList'
            aria-expanded='false'
          ></input>
          <svg
            aria-hidden='true'
            class='pre-nav-design-icon'
            focusable='false'
            viewBox='0 0 24 24'
            role='img'
            width='24px'
            height='24px'
            fill='none'
          >
            <path
              stroke='currentColor'
              stroke-width='1.5'
              d='M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451'
            ></path>
          </svg>
          <svg
            aria-hidden='true'
            class='pre-nav-design-icon'
            focusable='false'
            viewBox='0 0 24 24'
            role='img'
            width='24px'
            height='24px'
            fill='none'
          >
            <path
              stroke='currentColor'
              stroke-width='1.5'
              d='M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5'
            ></path>
          </svg>
=======
            <svg onMouseOver={hoveredOverColor} onMouseOut={hoveredOutColor} style = {backgroundStyle} class="searchIcon" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
            <path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853">
            </path>
          </svg>
          
          <input onMouseOver={hoveredOverColor1} onMouseOut={hoveredOutColor1} style = {backgroundStyle1} type="text" class="searchBar" name="search" autocomplete="off" data-var="vsInput" tabindex="0" placeholder="Search" aria-label="Search Products" role="combobox" aria-controls="VisualSearchSuggestionsList" aria-owns="VisualSearchSuggestionsList" aria-expanded="false">
          </input>
        </div>
        <svg onMouseOver={hoveredOver1} onMouseOut={hoveredOut1} aria-hidden="true" className="heart" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
          <svg onMouseOver={hoveredOver1} onMouseOut={hoveredOut1} aria-hidden="true" className="cart" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
>>>>>>> 078f0289ae21f8a70bbc9fbee45cc53b2da1bef6
        </div>
      </div>
    </div>
  );
};

export default HeaderLine2;
