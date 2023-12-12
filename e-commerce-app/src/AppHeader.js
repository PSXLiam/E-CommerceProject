import './AppHeader.css'

function AppHeader() {
    return (
        <div className="headerBody">
            <div className='headerTop'>
                <div className='storeName'>
                    <p>-Store Name-</p>
                </div>
                <div className='storeCart'>Cart</div>
            </div>
            <div className='headerBottom'>
                <button className='headerButton'>TEST1</button>
            </div>
        </div>
    )
}

export default AppHeader