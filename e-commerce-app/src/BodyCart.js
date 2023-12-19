import { useState } from 'react';
import './BodyCart.css'

export class Cart{ //class to contain information of the cart
    constructor(products, totalPrice){
        this.products = products
        this.totalPrice = totalPrice
    }

    findPostage(){ //function to calculate postage for order
        let postageCost = 5
        if (this.totalPrice == 0 || this.totalPrice > 200){//if totalPrice is equal to '0' or more than '200'
            postageCost = 0
            return postageCost
        }
        else{
            return postageCost
        }
    }
}

export function BodyCart({totalPrice, cartState}) {

    let currentCart = new Cart(cartState, totalPrice)
    let postageCost = currentCart.findPostage()

    return(
        <div className='AppBody'>
            <div className='cartBody'>
            <p className='cartTitle'>Cart</p>
                <div className='cartContent'>
                    <p className='productList'>{currentCart.products}</p>
                    <p className='totalPrice'>Product total: £{parseFloat(totalPrice).toFixed(2)}</p>{/*make totalPrice a float with two decimal places*/}
                    <p className='totalPrice'>Postage: £{postageCost.toFixed(2)}</p>
                    <p className='totalPrice'>Total Price: £{(parseFloat(totalPrice) + postageCost).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}
