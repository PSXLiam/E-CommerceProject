import { useState } from 'react'; //Allow the use of useState
import './AppHeader.css'

function AppHeader({setCurrentPage, totalPrice}) {//prop setCurrentPage to allow footer to change body page, totalPrice

    const [pages, setPages] = useState([
        {title: "Home"},
        {title: "Products"},
        {title: ""},
        {title: ""},
        {title: ""}
    ]) //dictionary for buttons in header

    return (
        <div className="headerBody">
            <div className='headerTop'> {/*div for the top half*/}
                <div className='storeName'>
                    <p>-Store Name-</p>
                </div>
                <div className='storeCart' onClick={() => {setCurrentPage("Cart")}}> {/*div for cart*/}
                    Cart
                    <p className='totalPrice'>£{totalPrice.toFixed(2)}</p>
                </div>
            </div>
            <div className='headerBottom'>  {/*div for the bottom half*/}
                {pages.map((page) => { //for each value in pages
                    return(
                       <button className='headerButton' onClick={() => {setCurrentPage(page.title)}}>{page.title}</button> //create button that leads to page of pages
                    )
                })}
            </div>
        </div>
    )
}

export default AppHeader