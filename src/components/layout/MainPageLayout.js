import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const MainPageLayout = () => {
    const [minimize, setMinimize] = useState(false);



    return (
        <>
            <Navbar />
            <div className="main-content-area">
                {
                    minimize ? <div className="content-area">hellllloooooo
                    </div> : <><Sidebar />
                        <div className="content-area">
                            hellllloooooo
                        </div></>
                }


                <button className="minimizebtn" onClick={() => { setMinimize(!minimize) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L6.29289 6.29289C6.68342 6.68342 7.31658 6.68342 7.70711 6.29289L13 1" stroke="#7D7D7E" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default MainPageLayout