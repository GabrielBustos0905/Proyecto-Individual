import React from "react";
import icon from "../assets/Icono.png";
import {BsCircleFill} from "react-icons/bs";
import { Link } from "react-scroll";
import { Link as Links } from "react-router-dom";

const NavbarHome = () => {
    const links = [
        {
            id: 1,
            link: "activities"
        },
        {
            id: 2,
            link: "countries"
        }
    ];

    return (
        <div className="fixed w-full h-26 shadow-md bg-white">
                    <div className="flex items-center w-full h-6 px-4 bg-[#ad9efc]">
                        <BsCircleFill color="white" className="p-1"/>
                        <BsCircleFill color="white" className="p-1"/>
                        <BsCircleFill color="white" className="p-1"/>
                    </div>
        
                    <div className="flex justify-between items-center w-full h-20 px-4 text-black">
                        <div className="flex justify-center items-center flex-col-2">
                            <Link to="/"><img src={icon} alt="" className="w-20 h-full"/></Link>
                            <div className="justify-center items-center">
                                <h1 className="pr-4 text-2xl">World in Detail</h1>
                                <p className="font-light">Countries</p>
                            </div>
                        </div>
                        
                        <div className="pr-10">
                            <ul className="flex flex-col-3 items-center justify-center">
                                {
                                    links?.map(({id, link}) => (
                                        <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                                            <Link to={link} smooth duration={500}>{link}</Link>
                                        </li>
                                    ))
                                }
                                <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"><Links to="/abaut">Abaut</Links></li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
};

export default NavbarHome;