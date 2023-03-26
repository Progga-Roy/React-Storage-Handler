import React from 'react';
import './Cosmetic.css'
import { addToDb } from '../utilities/fakeDb';

const Cosmetic = (props) => {
    const {name,price,picture,id} =props.cosmetic;
    const addToCart=(id)=>{
       addToDb(id)
    }
    return (
        <div className='cosmetic'>
            <h3>Name: {name}</h3>
            <img src={picture} alt="" />
            <p>it has id:{id}</p>
            <p>Price :{price}</p>
            <button onClick={()=>{addToCart(id)}}>Add to Cart</button>
            
        </div>
    );
};

export default Cosmetic;