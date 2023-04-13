import React, { useEffect, useState } from "react";
import Members from './members';
import Price from './Price';
import ShoeButtonGroup from "./ShoeButtonGroup";
import FreeSR from "./FreeSR"
import Reviews from './Reviews';
import SizeGuide from "./SizeGuide";

const RightBodyContainer = (props) => {

    const [memberAccess, setMemberAccess] = useState(true);
  
    return (
        <div>
            {memberAccess && <Members />}
            <h2>Air Jordan 1 Mid</h2>
            <h3>Men's Shoes</h3>
            <Price 
                setPrice={props.setPrice}
                price = {props.price}
            />
            <ShoeButtonGroup 
                setPrice={props.setPrice} 
                id={props.id} 
                setId={props.setId} 
                setMemberAccess={setMemberAccess}
                focusImage = {props.focusImage}
                setFocusedImage ={props.setFocusedImage}
                thumbnailImages={props.thumbnailImages}
                setThumbnailImages={props.setThumbnailImages}
                shoeid = {props.shoeid}
                sizeArray = {props.sizeArray}
                setSizeArray={props.setSizeArray}
            />
            <SizeGuide 
                sizeArray = {props.sizeArray}
            />
            <FreeSR/>
            <Reviews
                id={props.id}/>
        </div>
    )    
}

export default RightBodyContainer;