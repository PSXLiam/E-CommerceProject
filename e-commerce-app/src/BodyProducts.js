import { useState } from 'react';
import setCurrentPage from './App';
import './BodyProducts.css'

function BodyProducts() {
    return(
        <div className='AppBody'>
            <div className='productType'>
                <p className='productTypeTitle'>Monitors</p>
                <div className='ProductBox'>
                    <img className='productImage'></img>
                    <div className='productName'>Product</div>
                </div>
            </div>

        </div>
    )
}

export default BodyProducts