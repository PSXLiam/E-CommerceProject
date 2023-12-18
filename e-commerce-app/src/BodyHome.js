import { useState } from 'react';
import './BodyHome.css'

function BodyHome({setCurrentPage}) {

    const [recommendations, setRecommendations] = useState(["", "", "", ""]) //array for recommendations in BodyHome

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
                    {recommendations.map((index) => { //for each value in recommendations
                        return(
                            <div className='TESTPRODUCT'></div> //create a div of TESTPRODUCT
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default BodyHome