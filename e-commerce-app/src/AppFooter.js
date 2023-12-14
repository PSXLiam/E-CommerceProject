import { useState } from 'react';
import './AppFooter.css'

function AppFooter({setCurrentPage}) {

    const [pages, setPages] = useState([
        {title: "FAQ"},
        {title: "Help"},
        {title: "About Us"}
    ])

    return(
        <div className='footerBody'>
            {pages.map((page) => {
                return(
                    <button className='footerButton' onClick={() => {setCurrentPage(page.title)}}>{page.title}</button> 
                )
            })}
        </div>
    )
}

export default AppFooter