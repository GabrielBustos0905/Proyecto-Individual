import React from "react";
import Autumn from "../assets/leaf-fall.png";
import Summer from "../assets/sun.png";
import Spring from "../assets/flowers.png";
import Winter from "../assets/snowflake.png";
import { AiFillWarning } from "react-icons/ai";

const CardActivity = ({ name, difficulty, season, image, duration }) => {

    const seasons = [
        {
            name: "autumn",
            image: Autumn
        },
        {
            name: "summer",
            image: Summer
        },
        {
            name: "spring",
            image: Spring
        },
        {
            name: "winter",
            image: Winter
        }
    ]
    
    return (
        <div className="flex justify-center items-center">
            <div className="h-auto w-60 flex flex-col bg-white duration-200 hover:scale-105">
                <div className="flex justify-center items-center">
                    <img src={image} alt=""  className="h-40 w-56 mt-2"/>
                </div>

                <div className="flex justify-center items-center pt-4 pb-2">
                    <p className="text-xl font-bold text-gray-600">{name}</p>
                </div>

                <div className="flex items-center pl-2">
                    <p className="text-lg font-semibold text-gray-500 pr-2">Difficulty:</p>
                    <div className="flex justify-center items-center">
                        {
                            [...Array(5)].map((icon, index) => {
                                const difficultyValue = index + 1
                                console.log(difficulty)
                                return (
                                    <label className="text-[12px]" key={index}>
                                    <AiFillWarning
                                        size={20}
                                        color={difficultyValue <= difficulty ? "#ffc107" : "gray"}
                                    />
                                    </label>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="flex items-center pl-2 pb-4 pt-2">
                    <p className="text-lg font-semibold text-gray-500 pr-2">Season:</p>
                        {
                            season.map((s, id) => {
                                let temporada = seasons.find(seas => seas.name === s);
                                return (
                                    <img key={id} src={temporada.image} alt="" className="w-6 h-6 m-2"/>
                                )
                            })
                        }
                    
                </div>

                <div className="flex items-center pl-2">
                    <p className="text-lg font-semibold text-gray-500 pr-2">Duration:</p>
                    <p>{duration}</p>
                </div>
            </div>
        </div>
    )
};

export default CardActivity;