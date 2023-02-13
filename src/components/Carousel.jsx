import React from "react";
import carouselImg1 from "../assets/images/cosmetic-bottle.png";
import carouselImg2 from "../assets/images/cosmetic-cream.png";
import carouselImg3 from "../assets/images/cosmetics-bottles.png";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";

const Carousel = () => {
    return (
        <main className="container mx-auto">
            <div className="slider">
                <div className="slide flex relative">
                    <div className="bg-blue-200 w-2/3 flex items-center ">
                        <img src={carouselImg1} alt="" />
                        <div className="absolute left-1/2">
                            <h4 className="text-green-300 text-3xl ">New</h4>
                            <h1 className="text-8xl font-medium leading-normal">
                                Shower Gel
                            </h1>
                            <p className="w-144">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Fugiat, id. Laborum non dicta,
                                corrupti sunt corporis fugiat animi quo aut!
                            </p>
                        </div>
                    </div>
                    <div className="bg-green-200 4/12 w-1/3 flex flex-col justify-end">
                        <button className="flex items-center justify-between p-16">
                            <span>SEE ALL</span>
                            <BsArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Carousel;
