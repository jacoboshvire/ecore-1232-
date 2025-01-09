import React from 'react'
import Link from 'next/link'
import "./page.css";

function Stuff() {
    return (
        <div className='darkbtnStuff'>
            <div className='listen'>
                <a href='https://open.spotify.com/user/31yg52eyf2lr52hgn5slkuwdjh4u' target='_blink'>
                    <h3>
                        what do I listen to
                    </h3>
                    <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="19.2657" cy="20" rx="19.2657" ry="20" fill="#1ED761" />
                        <path d="M29.8504 14.5718C22.1947 8.57152 12.1662 12.0717 8.10897 14.5718C6.7211 16.2368 7.53069 17.0195 8.10897 17.2028C17.8464 10.5114 26.6605 14.4147 29.8504 17.2028C31.6412 16.6373 30.5965 15.2132 29.8504 14.5718Z" fill="black" stroke="black" />
                        <path d="M29.4661 19.3408C22.0838 14.3288 12.4135 17.2525 8.50115 19.3408C7.16285 20.7316 7.94353 21.3854 8.50115 21.5385C17.8908 15.9492 26.3901 19.2096 29.4661 21.5385C31.1929 21.0661 30.1856 19.8765 29.4661 19.3408Z" fill="black" stroke="black" />
                        <path d="M28.2176 23.8297C21.973 19.4263 13.6137 21.7069 10.2146 23.3976C9.0391 24.5497 9.69713 25.1204 10.1731 25.2617C18.3418 20.7143 25.5787 23.655 28.1761 25.6938C29.6679 25.3287 28.8253 24.2989 28.2176 23.8297Z" fill="black" stroke="black" />
                    </svg>
                </a>

            </div>
            <div className='dark'>

            </div>
        </div>
    )
}

export default Stuff
