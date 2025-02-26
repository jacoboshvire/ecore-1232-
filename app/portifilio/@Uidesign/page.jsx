"use client";
import "./uidesign.css"
import { useState, useEffect, useRef } from 'react';
import "../../page.css"
import "../portifilio.css"
import { motion, useMotionValue, useSpring, useVelocity, useInView, useScroll } from 'framer-motion';
//this are for next js link and navigation
import Link from 'next/link';
import Image from 'next/image';

export default function Uidesign() {
    // variable for Portfiliopost()
    let [portfilios, setPortfilios] = useState([]);
    let [error, setError] = useState(false)

    //fatch api
    let url = "https://jacob-shevy-api.onrender.com/api/uidesign"
    async function portfiliopost() {

        let response = await fetch(url)
        let data = await response.json();
        return data;
    }

    useEffect(() => {
        portfiliopost().then((data) => {
            setPortfilios(data.Uidesign);
            // console.log(data.Portfilio)
        }).catch(e => {
            setError(true);
        })
    }, [])

    // menu animation for showing the toggle burger menu
    let [sort, setSort] = useState(true)

    const togglelist = () => {
        setSort(true)
    }

    const toggleNotlist = () => {
        return setSort(false)
    }
    return (
        <>
            <div className="lenghtofpost">
                <p>
                    Total number of UI/UX designs so far is   <b className='bigtext'>" {portfilios.length} "</b>
                </p>

                <div className="sort" >
                    <div className={!sort ? "sortbtn1" : "bgn"} onClick={togglelist}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="uidesign">
                            <rect x="4" y="4" width="6" height="6" rx="1" strokeLinejoin="round" />
                            <rect x="4" y="14" width="6" height="6" rx="1" strokeLinejoin="round" />
                            <rect x="14" y="14" width="6" height="6" rx="1" strokeLinejoin="round" />
                            <rect x="14" y="4" width="6" height="6" rx="1" strokeLinejoin="round" />
                        </svg>

                    </div>

                    <div className={sort ? "sortbtn2" : "bgn"} onClick={toggleNotlist}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="uidesign">
                            <path d="M5 7H13" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5 12H11" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5 17H9" strokeWidth="2" strokeLinecap="round" />
                            <path d="M19 18L22 15M19 18L16 15M19 18L19 6" strokeWidth="2" />
                        </svg>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
            <div className={sort ? "postArea" : "listArea"}>

                {
                    !error ?
                        portfilios.map((portfilio) => {
                            return (
                                <motion.div className={sort ? "portfiliocard" : "listpost"} key={portfilio._id}

                                    initial={{
                                        opacity: 0
                                    }}

                                    whileInView={{
                                        opacity: 1
                                    }}

                                    whileHover={{
                                        scale: 1.05
                                    }}

                                >

                                    <Image className="postimage"
                                        src={portfilio.image}
                                        alt={portfilio.name}
                                        width={portfilio.imagewidth}
                                        height={portfilio.imageheight}
                                        // loading="lazy" 
                                        placeholder="blur"
                                        blurDataURL="https://res.cloudinary.com/dr0yyqvj6/image/upload/v1739834351/Rectangle_79_1_sqdraa.png"
                                        priority
                                    />

                                    <div className="namePost">
                                        <div className="postInfo">
                                            <h2>
                                                {portfilio.name}
                                            </h2>
                                            <p>
                                                {
                                                    ` ${portfilio.description.substring(0, 50)}  `
                                                }

                                                <b>
                                                    read more
                                                </b>
                                            </p>
                                        </div>
                                        <Link href={`/portfilios/uidesign/${portfilio._id}`} className="postlink">
                                            <p>learn more</p>
                                            <svg width="24" className="uidesignti" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 12H3" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M21.6427 11.7856L18.2116 9.72696C17.6784 9.40703 17 9.79112 17 10.413V13.587C17 14.2089 17.6784 14.593 18.2116 14.273L21.6427 12.2144C21.8045 12.1173 21.8045 11.8827 21.6427 11.7856Z" fill="nfr" />
                                            </svg>

                                        </Link>
                                    </div>


                                </motion.div>
                            )
                        })
                        :
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
                }
            </div>
        </>
    )
}