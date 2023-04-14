import React, { useState, useEffect, useRef } from 'react';
import '../styles/SuggestedContent.css';
import suggestionPrev from '../styles/svgs/suggestionPrev.svg';
import suggestionNext from '../styles/svgs/suggestionNext.svg';

// const suggestedItems = [
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/dc9efa13-9572-490e-afa9-4c5b8e25187a/air-jordan-1-mid-se-mens-shoes-Zn07hL.png',
//     name: 'Air Jordan 1 Mid SE',
//     category: "Men's Shoes",
//     price: '101.97',
//     ogPrice: '$135.00',
//   },
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/f3e69325-b434-49ba-a827-42ddb57590d7/air-jordan-1-mid-shoes-X5pM09.png',
//     name: 'Air Jordan 1 Mid',
//     category: 'Shoes',
//     price: '102.97',
//     ogPrice: '$125.00',
//   },
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/8d84f66f-5c98-4282-8163-8ee572945a09/air-jordan-1-low-mens-shoes-0LXhbn.png',
//     name: 'Air Jordan 1 Low',
//     category: "Men's Shoes",
//     price: '93.97',
//     ogPrice: '$110.00',
//   },
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/00fcbfdd-9d61-43de-8797-3ca28ff9a6e0/air-jordan-1-retro-high-og-mens-shoes-VdpsB7.png',
//     name: 'Air Jordan 1 Retro High OG',
//     category: "Men's Shoes",
//     price: '180.00',
//     ogPrice: '',
//   },
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/e50c3d5a-8634-4960-a964-2d8eb0b5e7ac/air-jordan-1-hi-flyease-mens-shoes-VjGcGX.png',
//     name: 'Air Jordan 1 Hi FlyEas',
//     category: "Men's Shoes",
//     price: '112.97',
//     ogPrice: '$150.00',
//   },
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/97029bbe-ccc1-4ad0-b51e-eff86332418d/air-jordan-1-zoom-cmft-2-mens-shoes-Tw02qw.png',
//     name: 'Air Jordan 1 Zoom CMFT 2',
//     category: "Men's Shoes",
//     price: '150.00',
//     ogPrice: '',
//   },
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/7b297575-1274-4034-9b25-94634cf9ec44/air-jordan-1-mid-womens-shoes-Kg3nnj.png',
//     name: 'Air Jordan 1 Mid',
//     category: "Women's Shoes",
//     price: '125.00',
//     ogPrice: '',
//   },
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/4203faa2-8da6-4416-a479-89d2c1f259f6/air-jordan-1-low-g-golf-shoes-jChrQ3.png',
//     name: 'Air Jordan 1 Low G',
//     category: 'Golf Shoes',
//     price: '140.00',
//     ogPrice: '',
//   },
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/3f1df5e3-cab5-4763-a2ca-2d5d34e818be/air-jordan-1-retro-high-womens-shoes-W1tGx4.png',
//     name: 'Air Jordan 1 Retro High',
//     category: "Women's Shoes",
//     price: '180.00',
//     ogPrice: '',
//   },
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/c33d5477-7b1d-4ddf-990a-efb9f4d55756/air-jordan-1-low-se-mens-shoes-kMt2HL.png',
//     name: 'Air Jordan 1 Low SE',
//     category: "Men's Shoes",
//     price: '120.00',
//     ogPrice: '',
//   },
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/1da9a11f-cc52-4b7a-ae05-29bb2a11318d/jordan-access-mens-shoe-5Jm9bC.png',
//     name: 'Jordan Access',
//     category: "Men's Shoe",
//     price: '110.00',
//     ogPrice: '',
//   },
//   {
//     img: 'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png',
//     name: "Nike Air Force 1 '07",
//     category: "Men's Shoes",
//     price: '110.00',
//     ogPrice: '',
//   },
// ];

const SuggestedContent = () => {

  const [suggestedContent, setSuggestedContent] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/shoes/')
            .then(res => res.json())
            .then((data) => {
              setSuggestedContent(data.filter(item => item.shoeid > 1));
            })
            .catch((error) => console.error(error))
  }, []);
  console.table(suggestedContent);

    const ref = useRef();
    const prevButton = useRef();
    const nextButton = useRef();
    let index = 1;
    const scroll = (scrollOffset) => {
      if (scrollOffset === 400) {
        ref.current.style.overflowX = 'scroll';
        index += 1;
        ref.current.scrollLeft += scrollOffset;
        if (index < 2) {
          index = 1;
          nextButton.current.style.opacity = '1';
          prevButton.current.style.opacity = '0.25';
          prevButton.current.style.cursor = 'default';
        } else if (index > 9) {
          index = 10;
          nextButton.current.style.opacity = '0.25';
          prevButton.current.style.opacity = '1';
          nextButton.current.style.cursor = 'default';
        } else {
          nextButton.current.style.opacity = '1';
          prevButton.current.style.opacity = '1';
          nextButton.current.style.cursor = 'pointer';
          prevButton.current.style.cursor = 'pointer';
        }
      }
      if (scrollOffset === -400) {
        index -= 1;
        ref.current.scrollLeft += scrollOffset;
        if (index < 2) {
          index = 1;
          nextButton.current.style.opacity = '1';
          prevButton.current.style.opacity = '0.25';
          prevButton.current.style.cursor = 'default';
        } else if (index > 9) {
          index = 10;
          nextButton.current.style.opacity = '0.25';
          prevButton.current.style.opacity = '1';
          nextButton.current.style.cursor = 'default';
        } else {
          nextButton.current.style.opacity = '1';
          prevButton.current.style.opacity = '1';
          nextButton.current.style.cursor = 'pointer';
          prevButton.current.style.cursor = 'pointer';
        }
      }
    };

    return (
      <div className='suggested-content'>
        <div id='slides-menu'>
          <div className='slider-title'>You Might Also Like</div>
          <div className='slide-controls'>
            <div
              ref={prevButton}
              className='scroll-button'
              style={{ opacity: '0.25' }}
              onClick={() => scroll(-400)}
            >
              <img
                src={suggestionPrev}
                alt='prev'
              />
            </div>
            <div
              ref={nextButton}
              className='scroll-button'
              onClick={() => scroll(400)}
            >
              <img
                src={suggestionNext}
                alt='next'
              />
            </div>
          </div>
        </div>
        <div
          id='card-slider'
          ref={ref}
        >
          {suggestedContent.map((item) => {
            return (
              <div className='suggested-card'>
                <img
                  id='suggested-card-image'
                  src={item.image}
                  alt=''
                />
                <span className='mid-weight-text'>{item.name}</span>
                <span
                  className='mid-weight-gray'
                  style={{ 'margin-bottom': '8px' }}
                >
                  {item.gender}
                </span>
                <span className='mid-weight-text'>{item.price}</span>
                <span
                  className='mid-weight-gray'
                  style={{ 'text-decoration-line': 'line-through' }}
                >
                </span>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default SuggestedContent;
