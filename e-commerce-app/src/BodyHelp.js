import { useState } from 'react';
import './BodyHelp.css'

function BodyHelp() {
    return(
        <div className='AppBody'>
            <div className='bodyTop'>
                <div className='questionnaireButton'>
                    <p className='questionnaireButtonText'>Questionnaire<br/> Find out what you are looking for.</p>
                </div>
            </div>
            <div className='bodyBottom'>
                <div className='stories'>
                    <p className='storiesTextTitle'>Stories</p>
                    <p className='storiesText'>-Story Here-</p>
                </div>
                <div className='bottomBase'>
                    <div className='links'>
                        <p className='ExLinks'>External Links</p>
                    </div>
                    <button className='bookClass'>Book Class</button>
                </div>
            </div>
        </div>
    )
}

export default BodyHelp