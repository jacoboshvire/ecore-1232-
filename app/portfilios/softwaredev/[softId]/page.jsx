"use client"
import React, { useState, useEffect } from 'react'
import "./software.css"
import "../../../page.css"
import "../../../About/about.css"
import Wave from '../../../image/Wave.png'
//import for the animation "i'm using framer motion for all my animation"
import { motion, useMotionValue, useSpring, useVelocity } from 'framer-motion'
import Image from 'next/image';
//this are for next js link and navigation
import Link from 'next/link';
import Footer from '../../../Footer.js';
import Stuff from '../../../Stuff.js'
import Pointingleft from '../../../image/PointingLeft.png'


export default function softwareid({ params }) {

    // cursor animations using framer motion and js eventlistener
    const cursorSize = 20 / 2;
    const newCursorSize = 100 / 2;

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })
    const [varientsmouse, setVarientsmouse] = useState("default")

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY

            })
        }

        window.addEventListener("mousemove", mouseMove)
        return () => (window.removeEventListener("mousemove", mouseMove))
    })

    const variants = {
        default: {
            x: mousePosition.x - cursorSize,
            y: mousePosition.y - cursorSize

        },

        text: {
            height: "100px",
            width: "100px",
            backgroundColor: "none",
            mixBlendMode: "difference",
            x: mousePosition.x - newCursorSize,
            y: mousePosition.y - newCursorSize
        },

        text2: {
            height: "100px",
            width: "100px",
            backgroundColor: "#9099b36",
            border: "1px solid white",
            x: mousePosition.x - newCursorSize,
            y: mousePosition.y - newCursorSize
        },

        changeColor: {
            backgroundColor: "white",
            border: "none",
            height: "200px",
            width: "200px",
            mixBlendMode: "difference",
            x: mousePosition.x - newCursorSize * 2,
            y: mousePosition.y - newCursorSize * 2
        }
    }


    // directing my variable to there functions
    const textEnter = () => setVarientsmouse("text")
    const text2Enter = () => setVarientsmouse("text2")
    const textLeave = () => setVarientsmouse("default")
    const Change = () => setVarientsmouse("changeColor")


    // menu animation for showing the toggle burger menu
    var [menu, setMenu] = useState(false);
    var [details, setDetails] = useState(false)

    const toggleMenu = () => {
        setMenu((menu) => (!menu))
    }

    const toggleDetails = () => {
        setDetails((details) => (!details))
    }


    const { softId } = React.use(params)
    // variable for Portfiliopost()
    const [portfilios, setPortfilios] = useState([]);
    const [writeUp, setWriteUp] = useState([])
    const [error, setError] = useState(false)
    const [newtools, setNewtools] = useState([])

    //fatch api

    async function portfiliopost() {
        let url = `https://jacob-shevy-api.onrender.com/api/portifilio/${softId}`
        let response = await fetch(url)
        let data = await response.json();
        return data;
    }

    useEffect(() => {

        portfiliopost().then((data) => {
            setPortfilios(data.foundPortfilio);

            setNewtools(data.foundPortfilio.tools)
            data.foundPortfilio.tools.map((toolss) => {
                console.log(`${toolss} <br />`)
            })
            const changeLink = (url) => {

                return `<a href=${url} target="_blank" rel="noopener noreferrer" className="textLink">${url}</a>`

            }


            const linkRegex = /(https?\:\/\/)?(www\.)?[^\s]+\.[^\s]+/g;

            setWriteUp(data.foundPortfilio.description.replace(/[\t]/g, "&nbsp;" + "&nbsp;" + "&nbsp; ")
                .replace(/[\n]/g, " &nbsp; <br /> &nbsp;")
                .replace(linkRegex, changeLink)
            )




        }).catch(e => {
            setError(true);
        })
    }, [])
    let date = new Date(portfilios.date);
    let dateMDY = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
    console.log(portfilios.tools)


    let txt = writeUp

    let toolsText = newtools.length


    return (
        <div className='softwaredev'>
            <motion.div className="cursor"
                variants={variants}
                animate={varientsmouse}
            />
            <nav>
                <li>
                    <a href="tel:+2348127187633" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M33.3334 18.3333C33.3334 13.6518 33.3334 11.311 32.2098 9.62952C31.7234 8.90159 31.0984 8.27658 30.3705 7.79019C28.689 6.66666 26.3482 6.66666 21.6667 6.66666H18.3334C13.6518 6.66666 11.311 6.66666 9.62955 7.79019C8.90162 8.27658 8.27661 8.90159 7.79022 9.62952C6.66669 11.311 6.66669 13.6518 6.66669 18.3333C6.66669 23.0149 6.66669 25.3556 7.79022 27.0371C8.27661 27.7651 8.90162 28.3901 9.62955 28.8765C11.0985 29.858 13.0705 29.982 16.6667 29.9977V30L18.5093 33.6852C19.1235 34.9136 20.8765 34.9136 21.4907 33.6852L23.3334 30V29.9977C26.9295 29.982 28.9016 29.858 30.3705 28.8765C31.0984 28.3901 31.7234 27.7651 32.2098 27.0371C33.3334 25.3556 33.3334 23.0149 33.3334 18.3333ZM15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H15ZM15 20.6667C14.4477 20.6667 14 21.1144 14 21.6667C14 22.2189 14.4477 22.6667 15 22.6667H20C20.5523 22.6667 21 22.2189 21 21.6667C21 21.1144 20.5523 20.6667 20 20.6667H15Z"
                            />
                        </svg>
                        <h3>
                            Let's talk
                        </h3>
                    </a>
                </li>
                {/* 2nd link */}
                <li className={menu ? "port hide" : "port"}>
                    <Link href={"/portifilio"} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path className="portIcon" fillRule="evenodd" clipRule="evenodd" d="M8.91912 7.25244C8.33334 7.83823 8.33334 8.78104 8.33334 10.6667V31C8.33334 32.8856 8.33334 33.8284 8.91912 34.4142C9.50491 35 10.4477 35 12.3333 35H27.6667C29.5523 35 30.4951 35 31.0809 34.4142C31.6667 33.8284 31.6667 32.8856 31.6667 31V10.6667C31.6667 8.78104 31.6667 7.83823 31.0809 7.25244C30.4951 6.66666 29.5523 6.66666 27.6667 6.66666H12.3333C10.4477 6.66666 9.50491 6.66666 8.91912 7.25244ZM15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H15ZM15 20.6667C14.4477 20.6667 14 21.1144 14 21.6667C14 22.2189 14.4477 22.6667 15 22.6667H25C25.5523 22.6667 26 22.2189 26 21.6667C26 21.1144 25.5523 20.6667 25 20.6667H15ZM15 27.3333C14.4477 27.3333 14 27.781 14 28.3333C14 28.8856 14.4477 29.3333 15 29.3333H21.6667C22.219 29.3333 22.6667 28.8856 22.6667 28.3333C22.6667 27.781 22.219 27.3333 21.6667 27.3333H15Z" />
                        </svg>
                        <h3>
                            Portifilio
                        </h3>
                    </Link>
                </li>
                <div className="menuPath"  >
                    {/* 3rd link */}
                    <li>
                        <a href="mailto:jacoshevire@gmail.com" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8977 19.6881L8.77543 17.314L8.77542 17.314L8.77541 17.314C6.42221 16.5296 5.24561 16.1374 5.24561 15.4167C5.24561 14.6959 6.42221 14.3037 8.77543 13.5193L27.0386 7.43157C28.6944 6.87964 29.5223 6.60368 29.9593 7.04069C30.3963 7.47771 30.1203 8.3056 29.5684 9.96139L23.4807 28.2246C22.6963 30.5778 22.3041 31.7544 21.5833 31.7544C20.8626 31.7544 20.4704 30.5778 19.686 28.2246L17.3119 21.1023L23.8321 14.5821C24.2226 14.1916 24.2226 13.5584 23.8321 13.1679C23.4416 12.7774 22.8084 12.7774 22.4179 13.1679L15.8977 19.6881Z" />
                            </svg>
                            <h3>
                                send Email
                            </h3>
                        </a>
                    </li>
                    {/* burger menu */}
                    <div onClick={toggleMenu} className={menu ? "menu newmenu" : "menu"} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </nav>
            <div className="nav2">
                <li>
                    <a href="tel:+2348127187633">
                        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="portIcon" fillRule="evenodd" clipRule="evenodd" d="M50 27.5C50 20.4777 50 16.9665 48.3147 14.4443C47.5851 13.3524 46.6476 12.4149 45.5557 11.6853C43.0335 10 39.5223 10 32.5 10H27.5C20.4777 10 16.9665 10 14.4443 11.6853C13.3524 12.4149 12.4149 13.3524 11.6853 14.4443C10 16.9665 10 20.4777 10 27.5C10 34.5223 10 38.0335 11.6853 40.5557C12.4149 41.6476 13.3524 42.5851 14.4443 43.3147C16.6477 44.7869 19.6057 44.9731 25 44.9966V45L27.7639 50.5279C28.6852 52.3705 31.3148 52.3705 32.2361 50.5279L35 45V44.9966C40.3943 44.9731 43.3523 44.7869 45.5557 43.3147C46.6476 42.5851 47.5851 41.6476 48.3147 40.5557C50 38.0335 50 34.5223 50 27.5ZM22.5 21.5C21.9477 21.5 21.5 21.9477 21.5 22.5C21.5 23.0523 21.9477 23.5 22.5 23.5H37.5C38.0523 23.5 38.5 23.0523 38.5 22.5C38.5 21.9477 38.0523 21.5 37.5 21.5H22.5ZM22.5 31.5C21.9477 31.5 21.5 31.9477 21.5 32.5C21.5 33.0523 21.9477 33.5 22.5 33.5H30C30.5523 33.5 31 33.0523 31 32.5C31 31.9477 30.5523 31.5 30 31.5H22.5Z" />
                        </svg>

                    </a>
                </li>
                <div className="inside_nav2">
                    <li>
                        <a href="mailto:jacoshevire@gmail.com">
                            <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.8977 19.6881L8.77543 17.314L8.77542 17.314L8.77541 17.314C6.42221 16.5296 5.24561 16.1374 5.24561 15.4167C5.24561 14.6959 6.42221 14.3037 8.77543 13.5193L27.0386 7.43157C28.6944 6.87964 29.5223 6.60368 29.9593 7.04069C30.3963 7.47771 30.1203 8.3056 29.5684 9.96139L23.4807 28.2246C22.6963 30.5778 22.3041 31.7544 21.5833 31.7544C20.8626 31.7544 20.4704 30.5778 19.686 28.2246L17.3119 21.1023L23.8321 14.5821C24.2226 14.1916 24.2226 13.5584 23.8321 13.1679C23.4416 12.7774 22.8084 12.7774 22.4179 13.1679L15.8977 19.6881Z" />
                            </svg>
                        </a>
                    </li>
                    <div onClick={toggleMenu} className={menu ? "menu newmenu" : "menu"} >
                        {/* ${menu? ""} */}
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className={menu ? "main_container" : "main_null"}>
                <div className="inside_container">
                    <div className="writeUp">
                        <Image className={menu ? "wave newwave" : "wave"}
                            src={Wave}
                            alt="wave"
                            width={menu ? 500 : 60}
                            height={menu ? 500 : 60}
                        />
                        <div className={menu ? "removeMenu" : "removeMenu menubox"} onMouseEnter={Change} onMouseLeave={textLeave}>
                            <div className="menuTitle">
                                <h1>
                                    Menu
                                </h1>
                            </div>

                            <div className="linkMenu">
                                <Link href={"/"}>
                                    <svg width="30px" height="30px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.79069 16.877C8.33325 17.8715 8.33325 19.003 8.33325 21.2659V28.3332C8.33325 31.4759 8.33325 33.0473 9.30956 34.0236C10.2685 34.9825 11.8014 34.9996 14.8333 34.9999V26.6667C14.8333 25.1939 16.0272 24 17.4999 24H22.4999C23.9727 24 25.1666 25.1939 25.1666 26.6667V34.9999C28.1985 34.9996 29.7314 34.9825 30.6903 34.0236C31.6666 33.0473 31.6666 31.4759 31.6666 28.3332V21.2659C31.6666 19.003 31.6666 17.8715 31.2092 16.877C30.7517 15.8824 29.8926 15.146 28.1745 13.6733L26.5078 12.2448C23.4023 9.58289 21.8495 8.25195 19.9999 8.25195C18.1503 8.25195 16.5975 9.58289 13.492 12.2448L11.8253 13.6733C10.1072 15.146 9.24812 15.8824 8.79069 16.877ZM23.1666 34.9999V26.6667C23.1666 26.2985 22.8681 26 22.4999 26H17.4999C17.1317 26 16.8333 26.2985 16.8333 26.6667V34.9999H23.1666Z" />
                                    </svg>

                                    <h5>
                                        Home
                                    </h5>
                                </Link>
                                <Link href={"/portifilio"}>
                                    <svg width="30px" height="30px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <path className="portIcon" fillRule="evenodd" clipRule="evenodd" d="M8.91912 7.25244C8.33334 7.83823 8.33334 8.78104 8.33334 10.6667V31C8.33334 32.8856 8.33334 33.8284 8.91912 34.4142C9.50491 35 10.4477 35 12.3333 35H27.6667C29.5523 35 30.4951 35 31.0809 34.4142C31.6667 33.8284 31.6667 32.8856 31.6667 31V10.6667C31.6667 8.78104 31.6667 7.83823 31.0809 7.25244C30.4951 6.66666 29.5523 6.66666 27.6667 6.66666H12.3333C10.4477 6.66666 9.50491 6.66666 8.91912 7.25244ZM15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H15ZM15 20.6667C14.4477 20.6667 14 21.1144 14 21.6667C14 22.2189 14.4477 22.6667 15 22.6667H25C25.5523 22.6667 26 22.2189 26 21.6667C26 21.1144 25.5523 20.6667 25 20.6667H15ZM15 27.3333C14.4477 27.3333 14 27.781 14 28.3333C14 28.8856 14.4477 29.3333 15 29.3333H21.6667C22.219 29.3333 22.6667 28.8856 22.6667 28.3333C22.6667 27.781 22.219 27.3333 21.6667 27.3333H15Z" />
                                    </svg>
                                    <h5>
                                        Portifilio
                                    </h5>
                                </Link>
                            </div>

                        </div>
                        <div className="about" onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            <Link href={"/About"}>
                                About me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



            {/* main area
            -------------------------------------------------- */}
            {
                error ?
                    <div className="error">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 0L40.9156 26.03L45.221 0.342205L42.7313 26.269L50.3528 1.36297L44.5002 26.743L55.3073 3.04482L46.192 27.4438L60 5.35898L47.778 28.3594L64.3505 8.26587L49.2308 29.4742L68.2843 11.7157L50.5258 30.7692L71.7341 15.6495L51.6406 32.222L74.641 20L52.5562 33.808L76.9552 24.6927L53.257 35.4998L78.637 29.6472L53.731 37.2687L79.6578 34.779L53.97 39.0844L80 40L53.97 40.9156L79.6578 45.221L53.731 42.7313L78.637 50.3528L53.257 44.5002L76.9552 55.3073L52.5562 46.192L74.641 60L51.6406 47.778L71.7341 64.3505L50.5258 49.2308L68.2843 68.2843L49.2308 50.5258L64.3505 71.7341L47.778 51.6406L60 74.641L46.192 52.5562L55.3073 76.9552L44.5002 53.257L50.3528 78.637L42.7313 53.731L45.221 79.6578L40.9156 53.97L40 80L39.0844 53.97L34.779 79.6578L37.2687 53.731L29.6472 78.637L35.4998 53.257L24.6927 76.9552L33.808 52.5562L20 74.641L32.222 51.6406L15.6495 71.7341L30.7692 50.5258L11.7157 68.2843L29.4742 49.2308L8.26587 64.3505L28.3594 47.778L5.35898 60L27.4438 46.192L3.04482 55.3073L26.743 44.5002L1.36297 50.3528L26.269 42.7313L0.342205 45.221L26.03 40.9156L0 40L26.03 39.0844L0.342205 34.779L26.269 37.2687L1.36297 29.6472L26.743 35.4998L3.04482 24.6927L27.4438 33.808L5.35898 20L28.3594 32.222L8.26587 15.6495L29.4742 30.7692L11.7157 11.7157L30.7692 29.4742L15.6495 8.26587L32.222 28.3594L20 5.35898L33.808 27.4438L24.6927 3.04482L35.4998 26.743L29.6472 1.36297L37.2687 26.269L34.779 0.342205L39.0844 26.03L40 0Z" />
                            <defs>
                                <radialGradient id="paint0_radial_500_6090" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40 38.5) rotate(81.3843) scale(50.065)">
                                    <stop stopColor="white" />
                                    <stop offset="1" stopColor="#FFF9F9" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <h2>
                            You are offline or you have bad network connection
                            Please check your connection or change your location.
                        </h2>
                    </div>
                    :
                    <div className="softwareMain">
                        <div className="titleLink">
                            <div className="softwareTitle">
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path className="portIcon" fillRule="evenodd" clipRule="evenodd" d="M8.91912 7.25244C8.33334 7.83823 8.33334 8.78104 8.33334 10.6667V31C8.33334 32.8856 8.33334 33.8284 8.91912 34.4142C9.50491 35 10.4477 35 12.3333 35H27.6667C29.5523 35 30.4951 35 31.0809 34.4142C31.6667 33.8284 31.6667 32.8856 31.6667 31V10.6667C31.6667 8.78104 31.6667 7.83823 31.0809 7.25244C30.4951 6.66666 29.5523 6.66666 27.6667 6.66666H12.3333C10.4477 6.66666 9.50491 6.66666 8.91912 7.25244ZM15 14C14.4477 14 14 14.4477 14 15C14 15.5523 14.4477 16 15 16H25C25.5523 16 26 15.5523 26 15C26 14.4477 25.5523 14 25 14H15ZM15 20.6667C14.4477 20.6667 14 21.1144 14 21.6667C14 22.2189 14.4477 22.6667 15 22.6667H25C25.5523 22.6667 26 22.2189 26 21.6667C26 21.1144 25.5523 20.6667 25 20.6667H15ZM15 27.3333C14.4477 27.3333 14 27.781 14 28.3333C14 28.8856 14.4477 29.3333 15 29.3333H21.6667C22.219 29.3333 22.6667 28.8856 22.6667 28.3333C22.6667 27.781 22.219 27.3333 21.6667 27.3333H15Z" />
                                </svg>
                                <h1>
                                    Portfilio
                                </h1>
                            </div>
                            <div className="softwareLinks">
                                <div className="listPath">
                                    <Image
                                        src={Pointingleft}
                                        alt="pointingleft"
                                        width={"50"}
                                    // height={'50'}

                                    />

                                    <div className="linkInSoftware" >
                                        <Link href={"/"} onMouseEnter={textEnter} onMouseLeave={textLeave}>Home</Link>
                                        <span>&ensp;|&ensp;</span>
                                        <Link href={"/portifilio"} onMouseEnter={textEnter} onMouseLeave={textLeave}>portfilio</Link>
                                        <span>&ensp;|&ensp;</span>
                                        <Link href={"#"} className='Mainpage'>{portfilios.name}</Link>
                                    </div>

                                </div>
                            </div>
                            <div className="softwareImage">
                                {
                                    !portfilios.image ? "" :
                                        <Image
                                            src={portfilios.image}
                                            alt={portfilios.name}
                                            height={portfilios.imageheight}
                                            width={portfilios.imagewidth}
                                        />
                                }
                            </div>
                            <div className="softwareNameDate">
                                <div className="softwareName">
                                    <h1>
                                        {portfilios.name}
                                    </h1>
                                </div>
                                <div className="softwareDate">
                                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='uidesign'>
                                        <circle cx="15" cy="16.25" r="8.75" strokeWidth="3" />
                                        <path d="M6.25 6.25L3.75 8.75" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M23.75 6.25L26.25 8.75" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M11.25 13.75L14.8093 16.1229C14.9172 16.1948 15.0622 16.1723 15.1432 16.071L17.5 13.125" strokeWidth="3" strokeLinecap="round" />
                                    </svg>

                                    <p>
                                        <b>posted</b> <span>&ensp;|&ensp;</span>  {dateMDY}
                                    </p>
                                </div>
                            </div>
                            <div className="softwareAboutTools">
                                <div className="softwareAbout" onMouseEnter={text2Enter} onMouseLeave={textLeave}>
                                    <div className="asTitle">
                                        <h2>
                                            About Project
                                        </h2>
                                    </div>

                                    <div className="moreAbtPro">
                                        <p className='writesoftware' dangerouslySetInnerHTML={{ __html: txt }}>

                                        </p>
                                    </div>
                                    <div className="moreAbtLinksoftware">
                                        <Link href={`${portfilios.Link}`}>
                                            <p>visit site &ensp; </p>
                                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='web'>
                                                <circle cx="12" cy="12" r="8" transform="rotate(-90 12 12)" />
                                                <path d="M6.78485 5.79249C7.46088 6.52528 8.00912 7.44557 8.39144 8.48941C8.77376 9.53325 8.981 10.6756 8.99875 11.837C9.01651 12.9984 8.84434 14.1511 8.49423 15.2148C8.14412 16.2785 7.62447 17.2279 6.97139 17.9968" />
                                                <path d="M17.3235 5.6778C16.608 6.41743 16.0274 7.36335 15.6251 8.44467C15.2227 9.52599 15.0091 10.7147 15.0003 11.9217C14.9914 13.1287 15.1875 14.3228 15.5739 15.4144C15.9603 16.506 16.5269 17.4669 17.2314 18.2251" />
                                                <path d="M4 12L20 12" />
                                                <path d="M12 4L12 20" />
                                            </svg>

                                        </Link>
                                    </div>
                                </div>
                                <div className="softwaretools">
                                    <div className="toolsTitle">
                                        <h1>
                                            Tools Use
                                        </h1>
                                    </div >
                                    <div className="keyToolsList" key={toolsText}>
                                        {newtools.map((newtoolss) => {
                                            return <div className="toolsList" >
                                                <p>{newtoolss}</p>
                                                <svg width="21" height="77" viewBox="0 0 21 77" fill="none" xmlns="http://www.w3.org/2000/svg" className='toolSvg'>
                                                    <path d="M11 0L11 61.5" />
                                                    <circle cx="10.5" cy="66.5" r="6.5" />
                                                    <circle cx="10.5" cy="66.5" r="10" className='uidesign' />
                                                </svg>
                                            </div>
                                        })}
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
            }



            {/* --------------------------------------------------- */}
            <Stuff />
            <Footer />
        </div>
    )
}
