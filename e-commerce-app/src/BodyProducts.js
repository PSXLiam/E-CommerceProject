import { useState } from 'react';
import setCurrentPage from './App';
import './BodyProducts.css'

function BodyProducts() {

    const [products, setProducts] = useState([
        {
            image: "BigScreen.jpg",
            name: "Big Screen"
        }
    ])

    return(
        <div className='AppBody'>
            <div className='productType'>
                <p className='productTypeTitle'>Monitors</p>
                <div className='ProductsBox'>
                    <div className='SingleProductBox'>
                        <img className='productImage' src="BigScreen.jpg" alt='Image Not Found'></img>
                        <div className='productName'>{products[0].name}</div>
                    </div>
                    <div className='SingleProductBox'>
                        <img className='productImage' src="BigScreen.jpg" alt='Image Not Found'></img>
                        <div className='productName'>{products[0].name}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BodyProducts