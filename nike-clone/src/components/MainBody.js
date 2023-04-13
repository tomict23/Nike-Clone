import { useState } from 'react';

import "../styles/App.css";
import "../styles/MainBody.css";
import HeroContainer from "./HeroContainer";
import RightBodyContainer from "./RightBodyContainer";

const MainBody = () => {
  const [id, setId] = useState(1);
  const [shoeid, setShoeId] = useState(1);
  // State management for which image is set to focus image
  const [focusImage, setFocusedImage] = useState();

  //State management for thumbnail images:
  const [thumbnailImages, setThumbnailImages] = useState([]);

  //State management for shoe sizes array:
  const [sizeArray, setSizeArray] = useState([]);

  //State management for shoe price:
  const [price, setPrice] = useState("");

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
            setSizeArray={setSizeArray}
            sizeArray={sizeArray}
            setPrice={setPrice}
            price={price}
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
            shoeid = {shoeid}
            sizeArray={sizeArray}
            setSizeArray={setSizeArray}
            price={price}
            setPrice={setPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
