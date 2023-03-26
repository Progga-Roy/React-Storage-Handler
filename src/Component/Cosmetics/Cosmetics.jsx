import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../utilities/Calculation';
// import add from '../utilities/Calculation';

const Cosmetics = () => {
    const cosmetics =[
        {id:1, name:'Alta', price: 100},
        {id:2, name:'Nail-Palish', price: 200},
        {id:3, name:'Lipstick', price: 300},
        {id:4, name:'Kajol', price: 400},
        {id:5, name:'Facepowder', price: 500},

    ]
    // const first = 55;
    // const second = 30;
    // const total = add(first,second)
    return (
        <div>
            {/* <h2>My Cosmetics</h2>
            <p>Total : {total}</p> */}
         {
            cosmetics.map(cosmetic=><Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
         }

        </div>
    );
};

export default Cosmetics;