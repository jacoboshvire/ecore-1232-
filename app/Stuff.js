"use client";
import { react, useEffect, useState } from 'react'
import Link from 'next/link'
import "./page.css";

function Stuff() {
    const darkmode = ""
    const [turnDark, setTurnDark] = useState(false)
    // const [prefersDarkMode, setPrefersDarkMode] = useState(darkmode);
    const darkToggle = () => {
        setTurnDark((turnDark) => (!turnDark))
        if (turnDark == true) {
            document.body.classList.add("dark")
            document.body.classList.remove("light")
        } else {
            document.body.classList.add("light")
            document.body.classList.remove("dark")
        }
    }

    useEffect(() => {

    })


    return (
        <div className='darkbtnStuff'>
            <div className='listen'>

                <a href='https://open.spotify.com/user/31yg52eyf2lr52hgn5slkuwdjh4u' target='_blink'>
                    <h5>
                        what do I listen to
                    </h5>
                    <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="19.2657" cy="20" rx="19.2657" ry="20" fill="#1ED761" />
                        <path d="M29.8504 14.5718C22.1947 8.57152 12.1662 12.0717 8.10897 14.5718C6.7211 16.2368 7.53069 17.0195 8.10897 17.2028C17.8464 10.5114 26.6605 14.4147 29.8504 17.2028C31.6412 16.6373 30.5965 15.2132 29.8504 14.5718Z" fill="black" stroke="black" />
                        <path d="M29.4661 19.3408C22.0838 14.3288 12.4135 17.2525 8.50115 19.3408C7.16285 20.7316 7.94353 21.3854 8.50115 21.5385C17.8908 15.9492 26.3901 19.2096 29.4661 21.5385C31.1929 21.0661 30.1856 19.8765 29.4661 19.3408Z" fill="black" stroke="black" />
                        <path d="M28.2176 23.8297C21.973 19.4263 13.6137 21.7069 10.2146 23.3976C9.0391 24.5497 9.69713 25.1204 10.1731 25.2617C18.3418 20.7143 25.5787 23.655 28.1761 25.6938C29.6679 25.3287 28.8253 24.2989 28.2176 23.8297Z" fill="black" stroke="black" />
                    </svg>
                </a>
            </div>
            {
                darkmode ? (turnDark ?
                    <div className='lightbtn' onClick={darkToggle}>

                        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.7939 11.9068C27.44 11.2377 28.2631 10.9032 28.7327 11.3871C29.2022 11.871 28.7446 12.9063 27.8294 14.977C26.3948 18.2226 26.2512 22.0301 27.7407 25.557C29.2302 29.0838 32.0595 31.6358 35.3862 32.8706C37.5086 33.6584 38.5698 34.0523 38.5893 34.7263C38.6087 35.4003 37.795 35.757 36.1676 36.4703C36.1116 36.4949 36.0553 36.5191 35.9987 36.543C29.2151 39.4079 21.3934 36.2311 18.5285 29.4474C15.6636 22.6638 18.8404 14.8421 25.6241 11.9772C25.6806 11.9533 25.7372 11.9299 25.7939 11.9068Z" fill="white" />
                        </svg>
                    </div>
                    :
                    <div className='darkbtn' onClick={darkToggle}>

                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20.0001" r="8.33334" fill="#FFD600" />
                            <path d="M20 13.3334V6.66675" stroke="#FFD600" strokeWidth="2" />
                            <path d="M20 33.3334V26.6667" stroke="#FFD600" strokeWidth="2" />
                            <path d="M15.2859 15.2853L10.5719 10.5713" stroke="#FFD600" strokeWidth="2" />
                            <path d="M29.428 29.4277L24.7139 24.7136" stroke="#FFD600" strokeWidth="2" />
                            <path d="M26.6667 20L33.3334 20" stroke="#FFD600" strokeWidth="2" />
                            <path d="M6.66665 20L13.3333 20" stroke="#FFD600" strokeWidth="2" />
                            <path d="M24.7141 15.2853L29.4281 10.5713" stroke="#FFD600" strokeWidth="2" />
                            <path d="M10.572 29.4277L15.2861 24.7136" stroke="#FFD600" strokeWidth="2" />
                        </svg>
                    </div>) : (!turnDark ?
                        <div className='lightbtn' onClick={darkToggle}>

                            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.7939 11.9068C27.44 11.2377 28.2631 10.9032 28.7327 11.3871C29.2022 11.871 28.7446 12.9063 27.8294 14.977C26.3948 18.2226 26.2512 22.0301 27.7407 25.557C29.2302 29.0838 32.0595 31.6358 35.3862 32.8706C37.5086 33.6584 38.5698 34.0523 38.5893 34.7263C38.6087 35.4003 37.795 35.757 36.1676 36.4703C36.1116 36.4949 36.0553 36.5191 35.9987 36.543C29.2151 39.4079 21.3934 36.2311 18.5285 29.4474C15.6636 22.6638 18.8404 14.8421 25.6241 11.9772C25.6806 11.9533 25.7372 11.9299 25.7939 11.9068Z" fill="white" />
                            </svg>
                        </div>
                        :
                        <div className='darkbtn' onClick={darkToggle}>

                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20.0001" r="8.33334" fill="#FFD600" />
                                <path d="M20 13.3334V6.66675" stroke="#FFD600" strokeWidth="2" />
                                <path d="M20 33.3334V26.6667" stroke="#FFD600" strokeWidth="2" />
                                <path d="M15.2859 15.2853L10.5719 10.5713" stroke="#FFD600" strokeWidth="2" />
                                <path d="M29.428 29.4277L24.7139 24.7136" stroke="#FFD600" strokeWidth="2" />
                                <path d="M26.6667 20L33.3334 20" stroke="#FFD600" strokeWidth="2" />
                                <path d="M6.66665 20L13.3333 20" stroke="#FFD600" strokeWidth="2" />
                                <path d="M24.7141 15.2853L29.4281 10.5713" stroke="#FFD600" strokeWidth="2" />
                                <path d="M10.572 29.4277L15.2861 24.7136" stroke="#FFD600" strokeWidth="2" />
                            </svg>
                        </div>)



            }
        </div>
    )
}

export default Stuff
