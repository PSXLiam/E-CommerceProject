import { useState } from 'react';
import './BodyHome.css'

function BodyHome({setCurrentPage}) {
    return(
        <div className='AppBody'>
            <div className='bodyTop'>
                <div className='bigHelpButton' onClick={() => {setCurrentPage("Help")}}> {/* on click load "Help" page*/}
                    <p>Need Help?<br/> Click Here</p>
                </div>
            </div>
            <div className='bodyBottom'>
                <p className='PRec'>Product Recommendations</p>
                <div className='prodRecommendations'>
                    {/*Product recommendations here*/}
                </div>
            </div>
        </div>
    )
}

export default BodyHome