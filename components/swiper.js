"use client";
import { useSwiper } from 'swiper/react';
import "../app/About/about.css"


function SwiperNavButtons() {
    const swiper = useSwiper();

    return (
        <div>
            <div className='control2' onClick={() => swiper.slidePrev()}>
                <svg className="uidesign" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 6L9 12L15 18" strokeWidth="2" />
                </svg>

            </div>
            <div className='control' onClick={() => swiper.slideNext()}>
                <svg className="uidesign" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" strokeWidth="2" />
                </svg>

            </div>
        </div>
    );
}

export default SwiperNavButtons


