import React from 'react';

const Cart = ({catId}) => {
    // console.log(catId);
    return (
        <div>
           <h1 className='text-3xl'>This is cart summery</h1>
           <h3>AL ID  :{catId}</h3> 
        </div>
    );
};

export default Cart;