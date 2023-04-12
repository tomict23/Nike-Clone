import { useState } from 'react';

import "../styles/App.css";
import "../styles/MainBody.css";
import HeroContainer from "./HeroContainer";
import RightBodyContainer from "./RightBodyContainer";
import SuggestedContent from './SuggestedContent';

const MainBody = () => {
  const [id, setId] = useState(1);

  // State management for which image is set to focus image
  const [focusImage, setFocusedImage] = useState();

  //State management for thumbnail images:
  const [thumbnailImages, setThumbnailImages] = useState([]);

  return (

    <div className="main-body-container">
      <div className="main-body">
        <div className="main-body-left">
          <HeroContainer 
            id={id}
            focusImage = {focusImage}
            setFocusedImage ={setFocusedImage}
            thumbnailImages={thumbnailImages}
            setThumbnailImages={setThumbnailImages}
          />
        </div>

        <div className="main-body-right">
          <RightBodyContainer 
            setId={setId}
            id={id}
            focusImage = {focusImage}
            setFocusedImage ={setFocusedImage}
            thumbnailImages={thumbnailImages}
            setThumbnailImages={setThumbnailImages}  
          />
        </div>
      </div>
      <SuggestedContent />
    </div>
  );
};

export default MainBody;
