import React from "react";
import NavbarHome from "./NavbarHome";
import image from "../assets/landingPage.avif"
import Countries from "./Countries";
import Activities from "./Activities";

const Home = () => {
    return (
        <div>
            <NavbarHome />
            <div className=" bg-gradient-to-b from-violet-400 to-pink-200">
                <img src={image} alt="" className="h-screen w-full"/>
            </div>
            <Countries />
            <Activities />
        </div>
    )
};

export default Home;