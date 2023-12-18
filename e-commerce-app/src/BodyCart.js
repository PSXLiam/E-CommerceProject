import { useState } from 'react';
import './BodyCart.css'

export class Cart{
    constructor(products, totalPrice){
        this.products = products
        this.totalPrice = totalPrice
    }

    findPostage(){
        let postageCost = 5
        if (this.totalPrice == 0 || this.totalPrice > 200){
            postageCost = 0
            return postageCost
        }
        else{
            return postageCost
        }
    }
}

export function BodyCart({totalPrice}) {

    let currentCart = new Cart("TESTS", totalPrice)
    let postageCost = currentCart.findPostage()

    return(
        <div className='AppBody'>
            <div className='cartBody'>
            <p className='cartTitle'>Cart</p>
                <div className='cartContent'>
                    <p className='productList'>{currentCart.Products}</p>
                    <p className='totalPrice'>Product total: £{parseFloat(totalPrice).toFixed(2)}</p>
                    <p className='totalPrice'>Postage: £{postageCost.toFixed(2)}</p>
                    <p className='totalPrice'>Total Price: £{(parseFloat(totalPrice) + postageCost).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}
