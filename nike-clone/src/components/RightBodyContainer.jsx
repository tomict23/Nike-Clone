import React, { useEffect, useState } from "react";
import Members from './members';
import Price from './Price';
import ShoeButtonGroup from "./ShoeButtonGroup";
import FreeSR from "./FreeSR"
import Reviews from './Reviews';
import InformationBlock from "./InformationBlock";

const RightBodyContainer = (props) => {

    const [memberAccess, setMemberAccess] = useState(true);
    const [price, setPrice] = useState("");
  
    return (
        <div>
            {memberAccess && <Members />}
            <h2>Air Jordan 1 Mid</h2>
            <h3>Men's Shoes</h3>
            <Price 
                setPrice={setPrice}
            />
            <ShoeButtonGroup 
                setPrice={setPrice} 
                id={props.id} 
                setId={props.setId} 
                setMemberAccess={setMemberAccess}
                focusImage = {props.focusImage}
                setFocusedImage ={props.setFocusedImage}
                thumbnailImages={props.thumbnailImages}
                setThumbnailImages={props.setThumbnailImages}
                shoeid = {props.shoeid}
            />
            <InformationBlock/>
            <FreeSR/>
            <Reviews
                id={props.id}
                data={props.data}/>
                
        </div>
    )    
}

export default RightBodyContainer;