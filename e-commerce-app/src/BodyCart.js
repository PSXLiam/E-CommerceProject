import './BodyCart.css'

function BodyCart() {

    return(
        <div className='AppBody'>
            <div className='cartBody'>
            <p className='cartTitle'>Cart</p>
                <div className='cartContent'>
                    <p className='productList'>Test</p>
                    <p className='totalPrice'>£0.00</p>
                </div>
            </div>
        </div>
    )
}

export default BodyCart