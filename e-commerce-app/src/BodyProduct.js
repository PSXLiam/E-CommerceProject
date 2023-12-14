import { useState } from 'react';
import setCurrentPage from './App';
import './BodyProduct.css'

function BodyProduct() {

    return(
        <div className='AppBody'>
            <div className='bodyTop'>
                <img className='productImage' alt='Image Not Found'></img>
            </div>
            <div className='bodyBottom'>
                <div className='productInfo'>
                    <p>-product name-</p>
                    <p>--product info here--</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default BodyProduct