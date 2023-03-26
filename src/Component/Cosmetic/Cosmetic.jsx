import React from 'react';

const Cosmetic = (props) => {
    const {name,price,picture,_id} =props.cosmetic
    return (
        <div>
            <h3>Name: {name}</h3>
            <img src={picture} alt="" />
            <p>it has id:{_id}</p>
            <p>Price :{price}</p>
        </div>
    );
};

export default Cosmetic;