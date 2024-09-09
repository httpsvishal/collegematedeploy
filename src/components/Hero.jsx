import * as React from 'react';
import { Carousel } from 'flowbite-react';
import HeroContent from './HeroContent';
import jbit from "../assets/carousel2.webp";
import college3 from "../assets/carousel3.webp";

const Hero = () => {
    // const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <div className="hero-container">
            <Carousel slideInterval={5000} className="rounded-none">
                <div className="relative h-full w-full rounded-none">
                    <div className="carousel-item flex w-full items-center justify-center rounded-none dark:bg-gray-700 dark:text-white">
                        <img src="https://www.uudoon.in/cuet-2023/img/uu-infra.jpg" alt="" className="carousel-image" />
                    </div>
                </div>
                <div className="relative h-full w-full rounded-none">
                    <div className="carousel-item flex w-full items-center justify-center rounded-none dark:bg-gray-700 dark:text-white">
                        <img src={jbit} alt="" className="carousel-image" />
                    </div>
                </div>
                <div className="relative h-full w-full rounded-none">
                    <div className="carousel-item flex w-full items-center justify-center rounded-none dark:bg-gray-700 dark:text-white">
                        <img src={college3} alt="" className="carousel-image" />
                    </div>
                </div>
            </Carousel>
            
            <HeroContent className="hero-content" />
        </div>
    )
}

export default Hero;