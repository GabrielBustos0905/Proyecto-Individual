import React from "react";
import Ski from "../assets/ski.png";
import Trekking from "../assets/trekking.jpg";
import Tennis from "../assets/tennis.jpg";
import CardActivity from "./CardActivity";
import Autumn from "../assets/leaf-fall.png";
import Spring from "../assets/flowers.png";
import Summer from "../assets/sun.png";
import Winter from "../assets/snowflake.png";

const Activities = () => {

    const activities = [
        {
            id: 1,
            name: "Ski",
            difficulty: 4,
            season: [Winter],
            image: Ski
        },
        {
            id: 2,
            name: "Trekking",
            difficulty: 2,
            season: [Winter, Summer, Autumn],
            image: Trekking
        },
        {
            id: 3,
            name: "Tennis",
            difficulty: 4,
            season: [Winter, Summer, Autumn, Spring],
            image: Tennis
        }
    ]

    return (
        <div className="pt-60 w-full h-full bg-gray-100">
            <div className="flex justify-center items-center mb-20">
                <p className="text-4xl font-semibold text-gray-600 inline border-b-4 border-[#ad9efc]">Some Activities</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-10">
                {
                    activities?.map(({ id, name, difficulty, season, image}) => {
                        return (
                            <div key={id}>
                                <CardActivity 
                                    id={id}
                                    name={name}
                                    difficulty={difficulty}
                                    season={season}
                                    image={image}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Activities;