import React from "react";

const CardActivity = ({ id, name, difficulty, season, image }) => {
    
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
                    <p>{difficulty}</p>
                </div>

                <div className="flex items-center pl-2 pb-4 pt-2">
                    <p className="text-lg font-semibold text-gray-500 pr-2">Season:</p>
                    {
                        season.map(s => {
                            return (
                                <img src={s} alt="" className="w-6 h-6 m-2"/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default CardActivity;