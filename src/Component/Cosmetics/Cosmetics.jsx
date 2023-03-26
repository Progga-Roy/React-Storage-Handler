import React from 'react';
import { add } from '../utilities/Calculation';
// import add from '../utilities/Calculation';

const Cosmetics = () => {
    const first = 55;
    const second = 30;
    const total = add(first,second)
    return (
        <div>
            <h2>My Cosmetics</h2>
            <p>Total : {total}</p>
        </div>
    );
};

export default Cosmetics;