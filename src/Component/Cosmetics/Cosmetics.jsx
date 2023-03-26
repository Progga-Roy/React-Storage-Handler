import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../utilities/Calculation';
// import add from '../utilities/Calculation';

const Cosmetics = () => {
   const [cosmetics,setCosmetics] =useState([])
   useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setCosmetics(data))

   },[])
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