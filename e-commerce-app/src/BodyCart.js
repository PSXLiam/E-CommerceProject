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

    completeCartState(){
        console.log(this.products)
        const completeCart = []
        this.products.forEach(e => { //for each value in product
            if (completeCart[e]) { //if value is already in product
                completeCart[e] += 1 //add another instance of product
            }
            else{
                completeCart[e] = 1 //intilised product as 1
            }
        })

        console.log(completeCart)

        // return completeCart.map((products) => <li>{products}</li>);//return each value of the array in a list.

        return completeCart
    }
}

export function BodyCart({totalPrice, cartState}) {

    let currentCart = new Cart(cartState, totalPrice) //create new instance of current cart
    let postageCost = currentCart.findPostage()
    let completeCart = currentCart.completeCartState()

    console.log(completeCart)

    return(
        <div className='AppBody'>
            <div className='cartBody'>
            <p className='cartTitle'>Cart</p>
                <div className='cartContent'>
                    <p className='productList'>Cart Content: {/*currentCart.products*/ completeCart.map((products) => <li>{products}</li>)}</p>
                    <p className='totalPrice'>Product Total: £{parseFloat(currentCart.totalPrice).toFixed(2)}</p>{/*make totalPrice a float with two decimal places*/}
                    <p className='totalPrice'>Postage: £{postageCost.toFixed(2)}</p>
                    <p className='totalPrice'>Total Price: £{(parseFloat(currentCart.totalPrice) + postageCost).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}
