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
            <div className="w-1/5">
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
                    <div className="mb-4 bg-green-300 ">
                        <img src={img1} alt="" />
                    </div>
                    <div className="mb-4 bg-gray-400">
                        <img src={img2} alt="" />
                    </div>
                    <div className="mb-4 bg-pink-100">
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className="w-1/2 ">
                    <div className="mb-4 bg-gray-200">
                        <img src={img4} alt="" />
                    </div>
                    <div className="mb-4 bg-orange-100">
                        <img src={img5} alt="" />
                    </div>
                    <div className="mb-4 bg-blue-300">
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Offer;
