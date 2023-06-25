import React from "react";
import Africa from "../assets/africa.png";
import Antarctica from "../assets/antarctica.png";
import Asia from "../assets/asia.png";
import Europe from "../assets/europe.png";
import NorthAmerica from "../assets/north-america.png";
import Oceania from "../assets/oceania.png";
import SouthAmerica from "../assets/south-america.png";
import Capital from "../assets/hospital.png"

function continentSvg (continent) {
    if(continent == "Africa") return Africa;
    if(continent == "Antarctica") return Antarctica;
    if(continent == "Asia") return Asia;
    if(continent == "Europe") return Europe;
    if(continent == "North America") return NorthAmerica;
    if(continent == "Oceania") return Oceania;
    if(continent == "South America") return SouthAmerica;
}

const CardCountry = ({ id, name, flag, continent, capital }) => {
    return (
        <div className="h-40 w-auto m-7 flex justify-start items-center shadow-xl bg-gradient-to-r from-white to-pink-100">
            <div className=" w-44 h-40 justify-center p-4">
                <img src={flag} alt="" className="w-full h-full"/>
            </div>

            <div className="w-2/3 h-36 ml-4">
                <p className="text-2xl pb-4 pt-2 font-semibold text-gray-600">{name}</p>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col justify-start pt-2">
                        <p className="pr-2 pl-2 font-medium text-gray-400">Continent: </p>
                        <div className="flex items-center">
                            <p className="pl-2">{continent}</p>
                            <img src={continentSvg(continent)} alt=""  className="w-auto h-8 pl-3"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start pt-2">
                        <p className="pr-2 pl-2 font-medium text-gray-400">Capital:</p>
                        <div className="flex items-center">
                            <p className="pl-2">{capital}</p>   
                            <img src={Capital} alt="" className="w-auto h-8 pl-4"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default CardCountry;