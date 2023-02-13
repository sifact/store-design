import React from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import Subscribe from "../components/Subscribe";

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Offer />
            <Subscribe />
        </>
    );
};

export default Home;
