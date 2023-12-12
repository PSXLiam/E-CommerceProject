import { useState } from 'react';
import './AppHeader.css'

function AppHeader() {

    const [pages, setPages] = useState([
        {title: "Home"},
        {title: ""},
        {title: ""},
        {title: ""},
        {title: ""}
    ])

    const [totalPrice, setTotalPrice] = useState (0.00)

    return (
        <div className="headerBody">
            <div className='headerTop'>
                <div className='storeName'>
                    <p>-Store Name-</p>
                </div>
                <div className='storeCart'>
                    Cart
                    <p className='totalPrice'>£{totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <div className='headerBottom'>
                {pages.map((page) => {
                    return(
                       <button className='headerButton'>{page.title}</button> 
                    )
                })}
            </div>
        </div>
    )
}

export default AppHeader