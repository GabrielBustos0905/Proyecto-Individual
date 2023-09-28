import React from "react";
import Ski from "../assets/ski.png";
import Trekking from "../assets/trekking.jpg";
import Tennis from "../assets/tennis.jpg";
import CardActivity from "./CardActivity";  
import { Link } from "react-router-dom";


const Activities = () => {

    const activities = [
        {
            id: 1,
            name: "Ski",
            difficulty: 4,
            season: ["winter"],
            image: Ski,
            duration: "13:04"
        },
        {
            id: 2,
            name: "Trekking",
            difficulty: 2,
            season: ["winter", "summer", "autumn"],
            image: Trekking,
            duration: "13:04"
        },
        {
            id: 3,
            name: "Tennis",
            difficulty: 4,
            season: ["winter", "summer", "autumn", "spring"],
            image: Tennis,
            duration: "13:04"
        }
    ]

    return (
        <div name="activities" className="pt-60 w-full h-full bg-gray-100">
            <div className="flex justify-center items-center mb-20">
                <p className="text-4xl font-semibold text-gray-600 inline border-b-4 border-[#ad9efc]">Some Activities</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-10">
                {
                    activities?.map(({ id, name, difficulty, season, image, duration}) => {
                        return (
                            <div key={id}>
                                <CardActivity 
                                    name={name}
                                    difficulty={difficulty}
                                    season={season}
                                    image={image}
                                    duration={duration}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-center items-center mt-6 p-12">
                <Link to="/activityForm" className="bg-violet-400 rounded-md shadow-md hover:bg-violet-600 hover:duration-500"><p className="text-white font-semibold text-lg p-2">Add Activity</p></Link>
            </div>
        </div>
    )
};

export default Activities;