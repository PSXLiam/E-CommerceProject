import { useState } from 'react';
import './BodyProducts.css'

function BodyProducts({setCurrentPage, products}) {

    return(
        <div className='AppBody'>
            <div className='productType'>
                <p className='productTypeTitle'>Monitors</p>
                <div className='ProductsBox'>
                    <div className='SingleProductBox' onClick={() => {setCurrentPage("Product")}}>
                        <img className='productImage' src="BigScreen.jpg" alt='Image Not Found'></img>
                        <div className='productName'>{products[0].name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyProducts