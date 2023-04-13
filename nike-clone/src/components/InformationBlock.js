import React, { useEffect, useState } from "react";


const InformationBlock = (props) => {

            return (
                <div className='informationBlock'>
                    <div className='IB1'>
                        <p className='IB1Line1'>
                            Shipping*
                        </p>
                        <div className='IB1Line2'>
                            <p className='IB1Line2Text'>
                                To get accurate shipping information
                            </p>
                            <p className='IB1Line2Location'>
                                Edit Location
                            </p>
                        </div>
                    </div>
                    <div className='IB2'>
                        <p className='IB2Line1'>
                            Free Pick Up
                        </p>
                        <p className='IB2Line2'>
                            Find a Store
                        </p>
                        <p className='IB2Line3'>
                            *Faster Shipping options may be available
                        </p>
                    </div>
                    <div className='IB3'>
                        <p className='IB3Line1'>
                         {props.currentShoe[0].description}
                        </p>
                    </div>
                    <div className='IB4'>
                        <p className='IB4Line1'>
                         {props.currentShoe[0].color_description}
                        </p>
                        <p className='IB4Line2'>
                         {props.currentShoe[0].style}
                        </p>
                    </div>
                </div>
            )    
        }
        

export default InformationBlock;