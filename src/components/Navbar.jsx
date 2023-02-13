import React from "react";
import user from "../assets/images/user.svg";
import search from "../assets/images/search.svg";
import bag from "../assets/images/shopping-bag.svg";

const Navbar = () => {
    return (
        <nav className="container mx-auto flex items-center justify-between py-10">
            <div>
                <h1 className="text-black-400 text-xl font-semibold">
                    Beauty Store
                </h1>
            </div>
            <div className="flex gap-20 items-center">
                <div className="flex gap-6">
                    <a href="">New</a>
                    <a href="">Catalogue</a>
                    <a href="">Payment</a>
                    <a href="">Shipping</a>
                    <a href="">Blog</a>
                    <a href="">Wishlist</a>
                    <a href="">Contact</a>
                </div>
                <div className="flex items-center gap-6">
                    <a href="">
                        <img src={user} alt="" />
                    </a>
                    <a href="">
                        <img src={search} alt="" />
                    </a>
                    <a href="">
                        <img src={bag} alt="" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
