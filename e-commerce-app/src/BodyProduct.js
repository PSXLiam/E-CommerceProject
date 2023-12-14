import { useState } from 'react';
import setCurrentPage from './App';
import './BodyProduct.css'

function BodyProduct({products}) {

    return(
        <div className='AppBody'>
            <div className='bodyTopProduct'>
                <img className='productImage' alt='Image Not Found'></img>
            </div>
            <div className='bodyBottomProduct'>
                <div className='productInfo'>
                    <p className='infoText'>{products[0].name}</p>
                    <p className='infoText'>Price: £{products[0].price}</p>
                    <p className='infoText'>{products[0].description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default BodyProduct