import { useState } from 'react';
import './BodyProduct.css'

function BodyProduct({products, totalPrice, setTotalPrice, productIndex}) {

    const [index, setIndex] = useState(productIndex)
    //console.log(productIndex)

    return(
        <div className='AppBody'>
            <div className='bodyTopProduct'>
                <img className='singleProductImage' src={products[index].image} alt='Image Not Found'></img>{/*generate 'Image Not Found' when no image is found*/}
            </div>
            <div className='bodyBottomProduct'>
                <div className='productInfo'>
                    <p className='infoText'>{products[index].name}</p>
                    <p className='infoText'>Price: £{products[index].price}</p>
                    <p className='infoText'>{products[index].description}</p>
                    <button onClick={() => {setTotalPrice(totalPrice+products[index].price)}}>Add to Cart</button> {/*On click append price of product to total price*/}
                </div>
            </div>
        </div>
    )
}

export default BodyProduct