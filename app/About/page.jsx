"use client";
import Footer from '../Footer.js';
import Stuff from '../Stuff.js'
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

export default function About() {
    return null
} 