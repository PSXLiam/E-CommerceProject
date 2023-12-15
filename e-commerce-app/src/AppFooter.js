import { useState } from 'react'; //Allow the use of useState
import './AppFooter.css'

function AppFooter({setCurrentPage}) {//prop setCurrentPage to allow footer to change body page

    const [pages, setPages] = useState([
        {title: "FAQ"},
        {title: "Help"},
        {title: "About Us"}
    ]) //dictionary for buttons in footer

    return(
        <div className='footerBody'>
            {pages.map((page) => { //for each value in pages
                return(
                    <button className='footerButton' onClick={() => {setCurrentPage(page.title)}}>{page.title}</button> //create button that leads to page of pages
                )
            })}
        </div>
    )
}

export default AppFooter