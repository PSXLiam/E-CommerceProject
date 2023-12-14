import { useState } from 'react';
import './BodyProduct.css'

function BodyProduct({products, totalPrice, setTotalPrice}) {

    const [index, setIndex] = useState(0)
    setIndex(products.index)

    return(
        <div className='AppBody'>
            <div className='bodyTopProduct'>
                <img className='productImage' alt='Image Not Found'></img>
            </div>
            <div className='bodyBottomProduct'>
                <div className='productInfo'>
                    <p className='infoText'>{products[index].name}</p>
                    <p className='infoText'>Price: £{products[index].price}</p>
                    <p className='infoText'>{products[index].description}</p>
                    <button onClick={() => {setTotalPrice(totalPrice+products[index].price)}}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default BodyProduct