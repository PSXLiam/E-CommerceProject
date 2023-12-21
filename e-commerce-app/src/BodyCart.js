import { useState } from 'react';
import './BodyCart.css'

export class Cart{ //class to contain information of the cart
    constructor(products, totalPrice){
        this.products = products
        this.totalPrice = totalPrice
    }

    /**A Function to Calculate the Postage of the Order*/
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

    /**A Function that takes the 'products' Array and Transforms it into a more Viewable Format.*/
    completeCartState(){
        //console.log(this.products)
        const contentCart = []

        this.products.forEach(e => { //for each value in product
            if (contentCart[e]) { //if value is already in product
                contentCart[e] += 1 //add another instance of product
            }
            else{
                contentCart[e] = 1 //initialize product as 1
            }
        })

        // console.log(contentCart)

        const cartMap = new Map(Object.entries(contentCart)) //turn contentCart into Map

        // console.log(cartMap)

        let completeCart = ""
        cartMap.forEach (function(value, key){ //for each key/value pair in cartMap
            completeCart += key + " x" + value + ". " //format output to give it correct appearence
        })

        // console.log(completeCart)
        
        return completeCart
    }
}

export function BodyCart({totalPrice, setTotalPrice, cartState, setCartState}) {

    let currentCart = new Cart(cartState, totalPrice) //create new instance of current cart

    const [formatCart, setFormatCart] = useState(currentCart)
    let completeCart = formatCart.completeCartState()
    //console.log(formatCart)
    const [productTotal, setProductTotal] = useState(parseFloat(currentCart.totalPrice.toFixed(2))) /*make 'productTotal' a float with two decimal places*/
    const [postageCost, setPostageCost] = useState(currentCart.findPostage())

    /**A Function to Empty the Cart of all Products*/
    function clearCart(){
        setTotalPrice(0)
        setCartState([])
        setFormatCart(new Cart([], 0))
        setProductTotal(0)
        setPostageCost(0)
    }


    return(
        <div className='AppBody'>
            <div className='cartBody'>
            <p className='cartTitle'>Cart</p>
                <div className='cartContent'>
                    <p className='productList'>Cart Content: {completeCart}</p>
                    <p className='totalPrice'>Product Total: £{productTotal}</p>
                    <p className='totalPrice'>Postage: £{postageCost.toFixed(2)}</p>{/*make 'postageCost' appear in two decimal places*/}
                    <p className='totalPrice'>Total Price: £{(productTotal + postageCost).toFixed(2)}</p>{/*have the Total Price appear in two decimal places*/}
                    <button onClick={() => {clearCart()}}>Clear Order</button>
                </div>
            </div>
        </div>
    )
}
