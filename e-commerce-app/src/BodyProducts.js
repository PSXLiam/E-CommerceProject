import './BodyProducts.css'

function getIndex(index){
    return index
}

function BodyProducts({setCurrentPage, products}) {

    return(
        <div className='AppBody'>
            <div className='productType'>
                <p className='productTypeTitle'>Monitors</p>
                <div className='ProductsBox'>
                    {products.map((product, index) => {
                        return(
                            <div className='SingleProductBox' onClick={() => {setCurrentPage("Product")}}>
                                <img className='productImage' src={product.image} alt='Image Not Found'></img>
                                <div className='productName'>{product.name}</div>
                                <div className='productPrice'>£{product.price}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BodyProducts