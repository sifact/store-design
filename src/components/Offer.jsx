import React, { useState } from "react";
import img1 from "../assets/images/cosmetics-two-bottles.png";
import img2 from "../assets/images/cosmetics-yellow-jar.png";
import img3 from "../assets/images/cosmetic-cream.png";
import img4 from "../assets/images/Cosmetics.png";
import img5 from "../assets/images/cosmetics-bottles.png";
import img6 from "../assets/images/cosmetics-jar.png";

const Offer = () => {
    const [showBodyItems, setShowBodyItems] = useState(false);

    return (
        <main className="container mx-auto py-32 flex">
            <div className="w-1/3">
                <div>
                    <h6 className="text-xl font-medium">Offer</h6>
                    <h2 className="text-3xl font-semibold">OFF</h2>
                    <h2 className="text-3xl font-semibold up__to mb-8 pb-4">
                        Upto 20%
                    </h2>
                    <h5>For all cosmetics</h5>
                </div>
                <div className="my-6">
                    <ul>
                        <li>
                            <button
                                className=" font-medium "
                                onClick={() => setShowBodyItems(!showBodyItems)}
                            >
                                For Face
                            </button>
                            <ul className={showBodyItems ? "" : "hidden"}>
                                <li className="ml-4 py-2 ">Cream</li>
                                <li className="ml-4 py-2">Oil</li>
                                <li className="ml-4 py-2">Mask</li>
                                <li className="ml-4 py-2">Lipstick</li>
                                <li className="ml-4 py-2">Spray</li>
                            </ul>
                        </li>
                        <li>
                            <button
                                className=" font-medium mb-2"
                                onClick={() => setShowBodyItems(!showBodyItems)}
                            >
                                For body
                            </button>
                            <ul className={showBodyItems ? "" : "hidden"}>
                                <li className="ml-4 ">Cream</li>
                                <li className="ml-4">Oil</li>
                                <li className="ml-4">Mask</li>
                                <li className="ml-4">Lipstick</li>
                                <li className="ml-4">Spray</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-4/5 flex ">
                <div className="w-1/2 mr-6">
                    <div className="mb-4 bg-green-300 box-1 w-2/3 ml-auto">
                        <img src={img1} alt="" />
                        <div className="absolute bottom-0 font-medium right-0 bg-white py-4 px-16">
                            <a href="">for body</a>
                        </div>
                    </div>
                    <div className="relative mb-4 bg-gray-100 box-2 w-full pt-32">
                        <img src={img2} alt="" />
                        <div className="absolute top-0 left-0 font-medium  bg-white py-4 px-16">
                            <a href="">for body</a>
                        </div>
                    </div>
                    <div className="relative mb-4 bg-pink-100 box-3 w-2/3 ml-auto h-64">
                        <img src={img3} alt="" />
                        <div className="absolute top-0 right-0 font-medium  bg-white py-4 px-16">
                            <a href="">for Hair</a>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 ">
                    <div className="mb-4 bg-gray-200 box-4 w-2/3">
                        <img src={img4} alt="" />
                        <div className="absolute bottom-0 left-0 font-medium  bg-white py-4 px-16">
                            <a href="">for body</a>
                        </div>
                    </div>
                    <div className="mb-4 bg-orange-100 box-5 w-full">
                        <img src={img5} alt="" />
                        <div className="absolute top-0 right-0 font-medium  bg-white py-4 px-16">
                            <a href="">for body</a>
                        </div>
                    </div>
                    <div className="relative mb-4 bg-blue-300 box-6 w-2/3 pt-32 pr-6">
                        <img src={img6} alt="" />
                        <div className="absolute top-0 left-0 font-medium  bg-white py-4 px-16">
                            <a href="">for body</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Offer;
