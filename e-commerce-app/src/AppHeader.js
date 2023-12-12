import { useState } from 'react';
import './AppHeader.css'

function AppHeader() {

    const [pages, setPages] = useState([
        {title: "Home"},
        {title: "Test2"},
        {title: "Test3"},
        {title: "Test4"},
        {title: "Test5"}
    ])

    return (
        <div className="headerBody">
            <div className='headerTop'>
                <div className='storeName'>
                    <p>-Store Name-</p>
                </div>
                <div className='storeCart'>Cart</div>
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