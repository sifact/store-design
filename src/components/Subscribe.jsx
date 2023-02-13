import React from "react";
import img from "../assets/images/cosmetics-tools.png";

const Subscribe = () => {
    return (
        <main className="container mx-auto flex">
            <div className="w-1/3 p-16 bg-orange-200 text-white">
                <form action="">
                    <h5 className="text-lg font-medium">Special</h5>
                    <h1 className="text-3xl font-semibold up-to-sub pb-16">
                        Offer
                    </h1>
                    <p className="pb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error, perspiciatis! Reprehenderit vel natus illum
                        ullam.
                    </p>

                    <input
                        type="text"
                        placeholder="Name"
                        className="p-2 placeholder:text-white rounded-sm w-full mb-4 bg-orange-300 outline-none hover:bg-orange-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 bg-orange-300 placeholder:text-white  rounded-sm w-full mb-4 outline-none hover:bg-orange-400"
                    />
                    <button className="py-2 w-full bg-black-200 ">
                        Subscribe Now
                    </button>
                </form>
            </div>
            <div className="w-2/3">
                <img src={img} alt="" />
            </div>
        </main>
    );
};

export default Subscribe;
