import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb, } from '../utilities/fakeDb';

const Cosmetic = (props) => {
    const {name,price,picture,id} =props.cosmetic;
    const addToCart=(id)=>{
     addToDb(id)
    }
    const removeCart=id=>{
      console.log('removing cart',id)
       removeFromDb(id)
    }
    return (
        <div className='cosmetic'>
            <h3>Name: {name}</h3>
            <img src={picture} alt="" />
            <p>it has id:{id}</p>
            <p>Price :{price}</p>
            <button onClick={()=>{addToCart(id)}}>Add to Cart</button>
            <button onClick={()=>{removeCart(id)}}>Remove Cart</button>
            
        </div>
    );
};

export default Cosmetic;