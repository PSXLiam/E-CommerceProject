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
                    <p className='totalPrice'>Product total: £{parseFloat(totalPrice).toFixed(2)}</p>
                    <p className='totalPrice'>Postage: £{postage.toFixed(2)}</p>
                    <p className='totalPrice'>Total Price: £{parseFloat(totalPrice) + postage}</p>
                </div>
            </div>
        </div>
    )
}

export default BodyCart