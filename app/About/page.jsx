"use client";
import Footer from '../Footer.js';
import Image from 'next/image';
//this are for next js link and navigation
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Wave from '../image/Wave.png'
import '../page.css';
import './about.css';
//this is for helping loop through my image
import { image, images } from './image2.js'
import { SvgImage, svgimages } from "../../components/SvgImage.jsx"
import Figma from '../image/figma-original.png'
import Graphics from '../image/illustrator-plain.png'

import { useState, useEffect, useRef } from 'react';
//import for the animation "i'm using framer motion for all my animation"
import { motion, useMotionValue, useSpring, useVelocity } from 'framer-motion'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperNavButtons from '../../components/swiper.js';
// import for the graph "i'm using chart.js please.note"
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend,
    PointElement,
    Filler,
    elements
} from 'chart.js'
import { LineData } from '../../components/graphs.js'
import { Line } from 'react-chartjs-2'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { GoogleMap, GoogleMapWrapper } from '@react-google-maps/api';
import 'dotenv/config';
require('dotenv').config()

// const googleMap = process.env.API_KEY;


// const containerStyle = {
//     width: '400px',
//     height: '400px',
// }

// const center = {
//     lat: 6.5244,
//     lng: 3.3792,
// }

// function MyComponent() {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: googleMap,
//     })
// }

export default function About() {
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

    // next navigation function
    const pathname = usePathname()

    //slider controller function 
    const swiper = useSwiper();

    //graphic objects

    ChartJS.register(
        LinearScale,
        CategoryScale,
        LineElement,
        LineController,
        PointElement,
        Title,
        Tooltip,
        Legend,
        Filler
    )



    const options = {
        animations: {
            tension: 0.2,
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 0.4,
                to: 0.2,
                loop: true

            }
        },
        responsive: true,
        backgroundColor: "#9099b367",
        bodyColor: "#9099b367",
        displayColors: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true////this will remove all the x-axis grid lines
            },
            y: {
                beginAtZero: true,
                display: true
            }
        }

    }



    return (
        <div className="aboutpage">
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
                    <Link href={"#"} onMouseEnter={textEnter} onMouseLeave={textLeave}>
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
                                <Link href={"#"}>
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
            <div className={details ? "detailsAbout" : "removeDetailsAbout detailsAbout"}>

            </div>
            <div className='mainframe_1st'>
                <motion.div className='about_1st'>
                    <div className='title_about1st'>
                        <h2>
                            About
                        </h2>

                        <Link onClick={toggleDetails} href={"#"} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                            see all
                        </Link>
                    </div>
                    <div className='about1st_text'>
                        <p>
                            Hello, I’m Oshevire Ejiro Jacob, also known as Jacoshevire or jacobShevy on social media. I’m a graphic designer, UX/UI designer, and software developer from Nigeria. I’m also deeply passionate about AI and MI, and I create innovative solutions with the potential to positively impact the world.
                        </p>
                        <div className='link_1st'>
                            <div className="abouts_1st" >
                                <a target='https://docs.google.com/document/d/1LRZ72amUUFnivvfqFE2HajmY1x71rVNKmgIZ6MVu2Jo/edit?usp=drive_link' href={"https://docs.google.com/document/d/1LRZ72amUUFnivvfqFE2HajmY1x71rVNKmgIZ6MVu2Jo/edit?usp=drive_link"} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                                    resume
                                </a>
                            </div>
                            <div className="about">
                                <Link href={"/"} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                                    Go Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className='pic_1st' onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    <Swiper
                        scrollbar={{ draggable: true }}
                        modules={[Navigation, Pagination, A11y]}
                        className='slider'
                        spaceBetween={50}
                        loop={true}
                        slidesPerView="auto"
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                    >
                        {
                            image.map((images, index) => (

                                <SwiperSlide key={index}>
                                    < Image
                                        // width={'100%'}
                                        // height={'100%'}
                                        src={images.src}
                                        alt={images.alts}
                                    />

                                </SwiperSlide>

                            ))

                        }
                        < SwiperNavButtons />
                    </Swiper>
                </div>
            </div>
            <div className='mainframe_2nd'>
                <div className='graph_2nd'>
                    <div className='graph_2nd_title'>
                        <h3>
                            Hobbies
                        </h3>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0899 2.82001C16.1702 2.06359 15.0933 1.52204 13.9376 1.23485C12.7819 0.947666 11.5767 0.922096 10.4099 1.16001C8.85632 1.47383 7.43093 2.24208 6.31462 3.36729C5.19832 4.49249 4.44141 5.92394 4.13994 7.48001C3.91979 8.64673 3.95979 9.84766 4.2571 10.9971C4.55441 12.1466 5.1017 13.2163 5.85994 14.13C6.56363 14.9241 6.96698 15.9395 6.99994 17V20C6.99994 20.7957 7.31601 21.5587 7.87862 22.1213C8.44123 22.6839 9.20429 23 9.99994 23H13.9999C14.7956 23 15.5587 22.6839 16.1213 22.1213C16.6839 21.5587 16.9999 20.7957 16.9999 20V17.19C17.0335 16.0192 17.4637 14.8944 18.2199 14C19.5451 12.3608 20.1697 10.2648 19.9581 8.16763C19.7465 6.07044 18.7158 4.14149 17.0899 2.80001V2.82001ZM14.9999 20C14.9999 20.2652 14.8946 20.5196 14.707 20.7071C14.5195 20.8947 14.2652 21 13.9999 21H9.99994C9.73473 21 9.48037 20.8947 9.29284 20.7071C9.1053 20.5196 8.99994 20.2652 8.99994 20V19H14.9999V20ZM16.6699 12.76C15.6644 13.9526 15.0778 15.442 14.9999 17H12.9999V14C12.9999 13.7348 12.8946 13.4804 12.707 13.2929C12.5195 13.1054 12.2652 13 11.9999 13C11.7347 13 11.4804 13.1054 11.2928 13.2929C11.1053 13.4804 10.9999 13.7348 10.9999 14V17H8.99994C8.97356 15.4681 8.40689 13.9948 7.39994 12.84C6.73558 12.044 6.28883 11.0894 6.10325 10.0694C5.91767 9.04928 5.99959 7.99852 6.34103 7.01954C6.68247 6.04055 7.27176 5.16675 8.05146 4.48333C8.83116 3.79992 9.77465 3.33021 10.7899 3.12001C11.6625 2.94035 12.5641 2.95725 13.4293 3.16948C14.2945 3.3817 15.1016 3.78393 15.792 4.34696C16.4824 4.90999 17.0387 5.61969 17.4206 6.42453C17.8025 7.22937 18.0004 8.10915 17.9999 9.00001C18.0073 10.3699 17.537 11.6995 16.6699 12.76Z" />
                        </svg>
                    </div>
                    <div className="mainGraph">
                        <Line options={options} data={LineData} className='graph' onMouseEnter={text2Enter} onMouseLeave={textLeave} />
                    </div>
                </div>
                <div className="tools_2nd">
                    <div className="ListOfSkill">
                        <div className="title_tools_2nd">
                            <h3>
                                Skills
                            </h3>
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.4869 8.62447V8.4534C18.4928 6.74171 17.9626 5.0732 16.974 3.69305C15.9854 2.3129 14.5907 1.29389 12.9947 0.785778H12.9357C12.1115 0.528413 11.2526 0.406153 10.3911 0.423528C8.33944 0.538837 6.40811 1.45166 4.99124 2.97571C3.57438 4.49975 2.7788 6.52012 2.76687 8.62447C2.19113 8.83189 1.69246 9.21725 1.3397 9.72733C0.986943 10.2374 0.797485 10.8471 0.797485 11.4722C0.797485 12.0972 0.986943 12.7069 1.3397 13.217C1.69246 13.7271 2.19113 14.1124 2.76687 14.3198C2.96923 16.307 3.88585 18.146 5.33854 19.4795C6.79122 20.8129 8.67615 21.5454 10.6269 21.5347H10.8528C12.7392 21.4411 14.5322 20.6661 15.9136 19.3471C17.2949 18.0282 18.1753 16.2506 18.3984 14.3299C18.981 14.1342 19.4894 13.7574 19.853 13.2518C20.2165 12.7463 20.4171 12.1372 20.4269 11.5094C20.4366 10.8817 20.255 10.2664 19.9072 9.74928C19.5595 9.23218 19.063 8.839 18.4869 8.62447ZM10.8037 19.5222C9.38145 19.5643 7.99229 19.0782 6.89258 18.1535C5.79288 17.2287 5.05684 15.9279 4.82029 14.4909H16.3843C16.1445 15.8512 15.4627 17.0886 14.4496 18.002C13.4365 18.9153 12.1516 19.4511 10.8037 19.5222ZM17.5044 12.4784H3.74937C3.48879 12.4784 3.23889 12.3724 3.05463 12.1837C2.87038 11.995 2.76687 11.739 2.76687 11.4722C2.76687 11.2053 2.87038 10.9493 3.05463 10.7606C3.23889 10.5719 3.48879 10.4659 3.74937 10.4659H5.71437C5.97494 10.4659 6.22484 10.3599 6.4091 10.1712C6.59335 9.98247 6.69687 9.72653 6.69687 9.45965C6.69687 9.19278 6.59335 8.93684 6.4091 8.74813C6.22484 8.55942 5.97494 8.4534 5.71437 8.4534H4.73187C4.77585 7.40953 5.06716 6.39229 5.58067 5.48946C6.09418 4.58663 6.81446 3.82532 7.67937 3.27122V6.4409C7.67937 6.70778 7.78288 6.96372 7.96713 7.15243C8.15139 7.34114 8.40129 7.44715 8.66187 7.44715C8.92244 7.44715 9.17235 7.34114 9.3566 7.15243C9.54085 6.96372 9.64437 6.70778 9.64437 6.4409V2.50647C9.91105 2.46083 10.18 2.4306 10.45 2.4159H10.6269C10.9561 2.42065 11.2846 2.45093 11.6094 2.50647V6.4409C11.6094 6.70778 11.7129 6.96372 11.8971 7.15243C12.0814 7.34114 12.3313 7.44715 12.5919 7.44715C12.8524 7.44715 13.1023 7.34114 13.2866 7.15243C13.4709 6.96372 13.5744 6.70778 13.5744 6.4409V3.24103C13.9911 3.48819 14.38 3.78178 14.7337 4.11647C15.3002 4.67986 15.7504 5.35407 16.0575 6.09908C16.3647 6.84408 16.5226 7.6447 16.5219 8.4534H15.5394C15.2788 8.4534 15.0289 8.55942 14.8446 8.74813C14.6604 8.93684 14.5569 9.19278 14.5569 9.45965C14.5569 9.72653 14.6604 9.98247 14.8446 10.1712C15.0289 10.3599 15.2788 10.4659 15.5394 10.4659H17.5044C17.7649 10.4659 18.0148 10.5719 18.1991 10.7606C18.3834 10.9493 18.4869 11.2053 18.4869 11.4722C18.4869 11.739 18.3834 11.995 18.1991 12.1837C18.0148 12.3724 17.7649 12.4784 17.5044 12.4784Z" />
                            </svg>

                        </div>
                        <div className="skillsTool">
                            <span className="skillsInside">
                                <div className="inside_skills">
                                    <p>
                                        software dev
                                    </p>
                                    <svg width='15' height='19' viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.94141 10.3721L0 8.17969V7.33984L4.94141 4.86914V6.31934L1.90918 7.70117L4.94141 8.93164V10.3721Z" />
                                        <path d="M9.80957 4L7.14844 11.3389H5.45898L8.12012 4H9.80957Z" />
                                        <path d="M10.2832 8.93164L13.3154 7.70117L10.2832 6.31934V4.86914L15.2246 7.33984V8.17969L10.2832 10.3721V8.93164Z" />
                                    </svg>

                                </div>
                                <div className="tools_skills">
                                    {
                                        SvgImage.map((svgimages, index) => (
                                            <div className="key_skills" key={svgimages.id}>
                                                <Image
                                                    width={'20px'}
                                                    height={'20px'}
                                                    src={svgimages.src}
                                                    alt={svgimages.alt}

                                                />
                                            </div>

                                        ))
                                    }
                                </div>
                            </span>
                            {/* 2nd skills */}
                            <span className="skillsInside">
                                <div className="inside_skills">
                                    <p>
                                        ui/ux designer
                                    </p>
                                    <svg className="uidesign" width="15" height="19" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="6" y="13" width="4" height="4" rx="2" transform="rotate(90 6 13)" strokeWidth="2" />
                                        <rect x="17" y="12" width="4" height="4" rx="2" transform="rotate(-90 17 12)" strokeWidth="2" />
                                        <path d="M18 11L16.5 12.5C15.4829 13.5171 14.9744 14.0256 14.3628 14.1384C14.1229 14.1826 13.8771 14.1826 13.6372 14.1384C13.0256 14.0256 12.5171 13.5171 11.5 12.5V12.5C10.4829 11.4829 9.97442 10.9744 9.36277 10.8616C9.12295 10.8174 8.87705 10.8174 8.63723 10.8616C8.02558 10.9744 7.51705 11.4829 6.5 12.5L5 14" strokeWidth="2" />
                                    </svg>


                                </div>
                                <div className="tools_skills">
                                    <div className="key_skills">
                                        <Image
                                            src={Figma}
                                            alt='figmas'
                                            width={'100%'}
                                            height={'auto'}
                                        />
                                    </div>
                                </div>
                            </span>
                            {/* 3rd skills */}
                            <span className="skillsInside">
                                <div className="inside_skills">
                                    <p>
                                        Graphic designer
                                    </p>
                                    <svg className="uidesign" width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="4" y="16" width="16" height="4" rx="2" strokeWidth="2" />
                                        <path d="M4.90949 11.3642L8 16H16L19.0905 11.3642C19.5259 10.7112 19.7436 10.3847 19.7083 10.0289C19.6731 9.67311 19.3956 9.39561 18.8406 8.84062L12 2L5.15938 8.84062C4.60439 9.39561 4.32689 9.67311 4.29166 10.0289C4.25643 10.3847 4.47412 10.7112 4.90949 11.3642Z" strokeWidth="2" />
                                        <circle cx="12" cy="11" r="2" strokeWidth="2" />
                                        <path d="M12 2V9" stroke="black" strokeWidth="2" />
                                    </svg>

                                </div>
                                <div className="tools_skills">
                                    <div className="key_skills">
                                        <Image
                                            alt='figma'
                                            src={Figma}
                                            width={'100%'}
                                            height={'auto'}
                                        />
                                    </div>
                                    <div className="key_skills">
                                        <Image
                                            alt='graphics'
                                            src={Graphics}
                                            width={'100%'}
                                            height={'auto'}
                                        />
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="googleMaps">
                <div className="mapsMap">
                    <div className='mainMap'><iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=900&amp;height=400&amp;hl=en&amp;q=Lagos,%20Nigeria+(jacobShevy)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                </div>
                <div className="details">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.9999 2.66663C13.1709 2.66663 10.4578 3.79043 8.45745 5.79082C6.45706 7.79121 5.33325 10.5043 5.33325 13.3333C5.33325 20.5333 14.7333 28.6666 15.1333 29.0133C15.3748 29.2199 15.6821 29.3334 15.9999 29.3334C16.3177 29.3334 16.6251 29.2199 16.8666 29.0133C17.3333 28.6666 26.6666 20.5333 26.6666 13.3333C26.6666 10.5043 25.5428 7.79121 23.5424 5.79082C21.542 3.79043 18.8289 2.66663 15.9999 2.66663ZM15.9999 26.2C13.1599 23.5333 7.99992 17.7866 7.99992 13.3333C7.99992 11.2116 8.84277 9.17673 10.3431 7.67644C11.8434 6.17615 13.8782 5.33329 15.9999 5.33329C18.1216 5.33329 20.1565 6.17615 21.6568 7.67644C23.1571 9.17673 23.9999 11.2116 23.9999 13.3333C23.9999 17.7866 18.8399 23.5466 15.9999 26.2ZM15.9999 7.99996C14.9451 7.99996 13.9139 8.31275 13.0369 8.89879C12.1598 9.48482 11.4762 10.3178 11.0726 11.2923C10.6689 12.2669 10.5633 13.3392 10.7691 14.3738C10.9749 15.4083 11.4828 16.3586 12.2287 17.1045C12.9746 17.8504 13.9249 18.3584 14.9594 18.5641C15.994 18.7699 17.0664 18.6643 18.0409 18.2607C19.0154 17.857 19.8484 17.1734 20.4344 16.2963C21.0205 15.4193 21.3333 14.3881 21.3333 13.3333C21.3333 11.9188 20.7713 10.5623 19.7712 9.56206C18.771 8.56186 17.4144 7.99996 15.9999 7.99996ZM15.9999 16C15.4725 16 14.9569 15.8436 14.5184 15.5505C14.0799 15.2575 13.7381 14.8411 13.5362 14.3538C13.3344 13.8665 13.2816 13.3303 13.3845 12.8131C13.4874 12.2958 13.7414 11.8206 14.1143 11.4477C14.4872 11.0747 14.9624 10.8208 15.4797 10.7179C15.997 10.615 16.5331 10.6678 17.0204 10.8696C17.5077 11.0714 17.9242 11.4132 18.2172 11.8518C18.5102 12.2903 18.6666 12.8059 18.6666 13.3333C18.6666 14.0405 18.3856 14.7188 17.8855 15.2189C17.3854 15.719 16.7072 16 15.9999 16Z" />
                    </svg>
                    <h2>
                        Lagos State, <br /> Nigeria
                    </h2>
                </div>
            </div>
            <Footer />
        </div>

    )
} 