import { useState } from 'react';
import './BodyCart.css'

function BodyCart({totalPrice}) {

    const [postage, setPostage] = useState(5)
    return(
        <div className='AppBody'>
            <div className='cartBody'>
            <p className='cartTitle'>Cart</p>
                <div className='cartContent'>
                    <p className='productList'>Test</p>
                    <p className='totalPrice'>Product total: £{parseInt(totalPrice.toFixed(2))}</p>
                    <p className='totalPrice'>Postage: £{postage}</p>
                    <p className='totalPrice'>Total Price: £{parseInt(totalPrice.toFixed(2)) + postage}</p>
                </div>
            </div>
        </div>
    )
}

export default BodyCart