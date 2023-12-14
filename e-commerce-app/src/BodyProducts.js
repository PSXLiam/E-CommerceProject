import { useState } from 'react';
import './BodyProducts.css'

function BodyProducts({setCurrentPage, products}) {

    return(
        <div className='AppBody'>
            <div className='productType'>
                <p className='productTypeTitle'>Monitors</p>
                <div className='ProductsBox'>
                    {products.map((product) => {
                        return(
                            <div className='SingleProductBox' onClick={() => {setCurrentPage("Product")}}>
                            <img className='productImage' src={product.image} alt='Image Not Found'></img>
                            <div className='productName'>{product.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BodyProducts