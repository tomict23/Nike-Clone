import React, { useEffect, useState } from "react";
import Members from './members';
import Price from './Price';
import ShoeButtonGroup from "./ShoeButtonGroup";
import FreeSR from "./FreeSR"
import Reviews from './Reviews';
import InformationBlock from "./InformationBlock";
import SizeGuide from "./SizeGuide";
import Interest from "./Interest";

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
                setSizeArray={props.setSizeArray}
                setInterest={props.setInterest}
            />
            <SizeGuide 
                sizeArray = {props.sizeArray}
            />
            <Interest 
                interest={props.interest}
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