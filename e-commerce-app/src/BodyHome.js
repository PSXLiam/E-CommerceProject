import { useState } from 'react';
import setCurrentPage from './App';
import './BodyHome.css'

function BodyHome() {
    return(
        <div className='AppBody'>
            <div className='bodyTop'>
                <div className='bigHelpButton' onClick={() => {setCurrentPage("Help")}}>
                    <p>Need Help?<br/> Click Here</p>
                </div>
            </div>
            <div className='bodyBottom'>
                <p className='PRec'>Product Recommendations</p>
                <div className='prodRecommendations'>
                    <div className='TESTPRODUCT'>TEST1</div>
                    <div className='TESTPRODUCT'>TEST2</div>
                    <div className='TESTPRODUCT'>TEST3</div>
                </div>
            </div>
        </div>
    )
}

export default BodyHome