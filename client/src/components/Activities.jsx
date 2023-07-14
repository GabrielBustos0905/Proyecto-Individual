import React from "react";
import Ski from "../assets/ski.png";
import Trekking from "../assets/trekking.jpg";
import Tennis from "../assets/tennis.jpg";
import CardActivity from "./CardActivity";

const Activities = () => {

    const activities = [
        {
            id: 1,
            name: "Ski",
            difficulty: 4,
            season: ["Winter"],
            image: Ski
        },
        {
            id: 2,
            name: "Trekking",
            difficulty: 2,
            season: ["Winter", "Summer", "Autum"],
            image: Trekking
        },
        {
            id: 3,
            name: "Tennis",
            difficulty: 4,
            season: ["Winter", "Summer", "Autum", "Spring"],
            image: Tennis
        }
    ]

    return (
        <div className="pt-60 w-full h-full bg-gray-100">
            <div className="flex justify-center items-center mb-20">
                <p className="text-4xl font-semibold text-gray-600 inline border-b-4 border-[#ad9efc]">Some Activities</p>
            </div>

            <div className="h-full grid grid-cols-3 bg-black">
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