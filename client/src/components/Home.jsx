import React from "react";
import Navbar from "./Navbar";
import image from "../assets/landingPage.avif"

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gradient-to-b from-violet-400 to-pink-200">
                <img src={image} alt="" className="h-screen w-3/6"/>
            </div>
        </div>
    )
};

export default Home;