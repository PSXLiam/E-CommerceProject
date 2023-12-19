import { useState } from 'react';
import './BodyProduct.css'

function BodyProduct({products, totalPrice, setTotalPrice, productIndex, cartState, setCartState}) {

    const [index, setIndex] = useState(productIndex)
    //console.log(productIndex)

    function addCart(newCart){
        let formatCart = `${newCart}, `
        let temp = [...cartState]
        temp.push(formatCart)
        setCartState(temp)
    }


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
                    <button onClick={() => {setTotalPrice(totalPrice+products[index].price); addCart(products[index].name)}}>Add to Cart</button> {/*On click append price of product to total price*/}
                </div>
            </div>
        </div>
    )
}

export default BodyProduct