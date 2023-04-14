import React, { useState, useEffect } from 'react';

const ShoeButtonGroup = (props) => {

    const [picArray, setPicArray] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await
            fetch('http://localhost:8000/api/shoeid/' + props.shoeid);
            const data = await response.json();
            setPicArray(data.map(shoe => shoe.image))
        };
        fetchData();
    }, []);

    const handleImageClick = (index) => {
        const id = index + 1;
        props.setId(id);
        if (id === 1){
            props.setMemberAccess(true);
        }else {
            props.setMemberAccess(false);
        }
        fetch(`http://localhost:8000/api/shoes/${id}`)
            .then(res => res.json())
            .then((data) => {
                props.setFocusedImage(data[0].image);
                props.setThumbnailImages(data[0].image_array);
                props.setPrice(data[0].price);
                props.setSizeArray(data[0].size_array)
                //To caculate payment options for interest-free 4 payments
                const num = (((parseFloat(data[0].price.replace(/[^\d.-]/g, ''))) / 4).toFixed(2));
                props.setInterest("$" + num);
            })
            .catch((error) => console.error(error))
    };

    return (
        <>
            <fieldset>
                {picArray.map((image, index) => (
                    <img className='pic-container' key={index} src={image} alt={''} onClick={() => handleImageClick(index)} />
                ))}
            </fieldset>
        </>
    )
}

export default ShoeButtonGroup;