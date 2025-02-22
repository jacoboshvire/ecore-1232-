"use client";
import { useState, useEffect, useRef } from 'react';
import "../../page.css"
import "../portifilio.css"
import { motion, useMotionValue, useSpring, useVelocity, useInView, useScroll } from 'framer-motion';
//this are for next js link and navigation
import Link from 'next/link';
import Image from 'next/image';

export default function Softwaredev() {

    // variable for Portfiliopost()
    let [portfilios, setPortfilios] = useState([]);

    //fatch api
    let url = "https://jacob-shevy-api.onrender.com/api/portifilio"
    async function portfiliopost() {

        let response = await fetch(url)
        let data = await response.json();
        return data;
    }

    useEffect(() => {
        portfiliopost().then((data) => {
            setPortfilios(data.Portfilio);
            // console.log(data.Portfilio)
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
                    Total number of software development jobs so far is   <b className='bigtext'>" {portfilios.length} "</b>
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
                                                ` ${portfilio.description.substring(0, 100)}  `
                                            }

                                            <b>
                                                read more
                                            </b>
                                        </p>
                                    </div>
                                    <Link href={"#"} className="postlink">
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
                }
            </div>
        </>
    )
}