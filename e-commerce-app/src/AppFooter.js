import { useState } from 'react'; //Allow the use of useState
import './AppFooter.css'

function AppFooter({setCurrentPage}) {//prop setCurrentPage to allow footer to change body page

    const [pages, setPages] = useState(["FAQ", "Help", "About Us"]) //array for buttons in footer

    return(
        <div className='footerBody'>
            {pages.map((page) => { //for each value in pages
                return(
                    <button className='footerButton' onClick={() => {setCurrentPage(page)}}>{page}</button> //create button that leads to page of pages
                )
            })}
        </div>
    )
}

export default AppFooter