import { useState } from 'react';
import './AppFooter.css'

function AppFooter() {
    return(
        <div className='footerBody'>
            <button className='footerButton'>FAQ</button>
            <button className='footerButton'>Help</button>
            <button className='footerButton'>About Us</button>
        </div>
    )
}

export default AppFooter