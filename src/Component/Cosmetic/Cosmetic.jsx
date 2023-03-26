import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name,price,picture,_id} =props.cosmetic;
    const addToCart=(_id)=>{
       console.log('item added',_id)
    }
    return (
        <div className='cosmetic'>
            <h3>Name: {name}</h3>
            <img src={picture} alt="" />
            <p>it has id:{_id}</p>
            <p>Price :{price}</p>
            <button onClick={()=>{addToCart(_id)}}>Add to Cart</button>
            
        </div>
    );
};

export default Cosmetic;