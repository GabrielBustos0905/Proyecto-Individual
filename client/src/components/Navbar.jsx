import React from "react";
import icon from "../assets/Icono.png";
import {BsCircleFill} from "react-icons/bs";
import {Link} from "react-router-dom";
 
const Navbar = () => {
    return (
        <div className="fixed w-full h-26 shadow-md opacity-90 bg-white">
            <div className="flex items-center w-full h-6 px-4 bg-pink-200">
                <BsCircleFill color="white" className="p-1"/>
                <BsCircleFill color="white" className="p-1"/>
                <BsCircleFill color="white" className="p-1"/>
            </div>

            <div className="flex justify-between items-center w-full h-20 px-4 text-black">
                <div className="flex justify-center items-center flex-col-2">
                    <Link to="/home"><img src={icon} alt="" className="w-20 h-full"/></Link>
                    <div className="justify-center items-center">
                        <h1 className="pr-4 text-2xl">Proyecto Individual</h1>
                        <p className="font-light">Countries</p>
                    </div>
                </div>

                <div className="pr-10">
                    <ul className="flex flex-col-3 items-center justify-center">
                        <li className="px-5 cursor-pointer capitalize font-light hover:scale-105 duration-200">Activities</li>
                        <li className="px-5 cursor-pointer capitalize font-light hover:scale-105 duration-200">Countries</li>
                        <li className="px-5 cursor-pointer capitalize font-light hover:scale-105 duration-200">Abaut</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Navbar;