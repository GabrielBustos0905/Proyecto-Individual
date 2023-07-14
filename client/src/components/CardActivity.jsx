import React from "react";

const CardActivity = ({ id, name, difficulty, season, image }) => {
    return (
        <div className="h-auto w-60 flex flex-col bg-white">
            <div className="flex justify-center items-center">
                <img src={image} alt=""  className="h-40 w-56 mt-2"/>
            </div>

            <div>
                <p>{name}</p>
            </div>
        </div>
    )
};

export default CardActivity;