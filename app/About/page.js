"use client";
import Footer from '../Footer.js';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../page.css';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useVelocity } from 'framer-motion'

export default function About() {
    const cursorSize = 20 / 2;
    const newCursorSize = 100 / 2;
    // const mouse = {
    //     x: useMotionValue(0),
    //     y: useMotionValue(0)
    // }

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })
    const [varientsmouse, setVarientsmouse] = useState("default")


    // const operation = { daming: 20, stiffness: 20, mass: 0.5 }
    // const smoothmouse = {
    //     x: useSpring(mouse.X, operation),
    //     y: useSpring(mouse.y, operation)
    // }

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



    const textEnter = () => setVarientsmouse("text")
    const textLeave = () => setVarientsmouse("default")
    const Change = () => setVarientsmouse("changeColor")



    var [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu((menu) => (!menu))
    }
    const pathname = usePathname()
    return (
        <div className="aboutpage">
            <motion.div className="cursor"
                variants={variants}
                animate={varientsmouse}
            />
            <nav>

            </nav>
            <Footer />
        </div>
    )
} 