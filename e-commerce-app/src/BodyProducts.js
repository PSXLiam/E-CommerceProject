import './BodyProducts.css'

function BodyProducts({setCurrentPage, products, setProductIndex}) {

    return(
        <div className='AppBody'>
            <div className='productType'>
                <p className='productTypeTitle'>Monitors</p>
                <div className='ProductsBox'>
                    {products.map((product, index) => { //for each object in products (index to call on map index)
                        return(
                            <div className='SingleProductBox' onClick={() => {setProductIndex(index); setCurrentPage("Product")}}> {/*on click go to product page of product index*/}
                                <img className='productImage' src={product.image} alt='Image Not Found'></img> {/*generate 'Image Not Found' when no image is found*/}
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