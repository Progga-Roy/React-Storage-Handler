import React from 'react';
import { multiply } from '../utilities/Calculation';

const Shoes = () => {
    const first =23;
    const second = 5
    const total =multiply(first,second)
    return (
        <div>
            <h3>My shoes compo</h3>
            <p>Total: {total}</p>
        </div>
    );
};

export default Shoes;