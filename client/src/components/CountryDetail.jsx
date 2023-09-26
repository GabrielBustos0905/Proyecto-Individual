import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../redux/actions";
import Navbar from "./Navbar";
import MapViews from "./Map Views/MapViews";

const CountryDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const country = useSelector((state) => state.countryDetail);

    useEffect(() => {
        dispatch(getCountryDetail(id))
    }, []);

    console.log(country.coords)

    return (
        <div className="h-full w-full bg-gray-100">
            <Navbar />
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex flex-col justify-center items-center bg-white w-10/12">
                    <div className="flex justify-center items-center">
                        <div className="w-1/3 flex justify-center items-center m-4">
                            
                            <MapViews coords={country.coords ? country.coords : [0, 0]}/>
                        </div>
                        <div className="w-2/3 flex flex-col justify-center items-center m-4">
                            <h2 className="text-gray-600 text-4xl font-semibold inline border-b-4 border-[#ad9efc] mb-8">{country.name}</h2>
                            <img src={country.flag} alt="" className="w-80 h-40"/>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center m-4">
                                    <p className="text-gray-400 text-xl font-medium">Continent:</p>
                                    <p className="text-xl font-semibold ml-1">{country.continent}</p>
                                </div>
                                <div className="flex justify-center items-center m-4">
                                    <p className="text-gray-400 text-xl font-medium">Capital:</p>
                                    <p className="text-xl font-semibold ml-1">{country.capital}</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center m-4">
                                    <p className="text-gray-400 text-xl font-medium">Subregion:</p>
                                    <p className="text-xl font-semibold ml-1">{country.subregion}</p>
                                </div>
                                <div className="flex justify-center items-center m-4">
                                    <p className="text-gray-400 text-xl font-medium">Timezone:</p>
                                    <p className="text-xl font-semibold ml-1">{country.timezones}</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center m-4">
                                    <p className="text-gray-400 text-xl font-medium">Population:</p>
                                    <p className="text-xl font-semibold ml-1">{country.population} :0</p>
                                </div>
                                <div className="flex justify-center items-center m-4">
                                    <p className="text-gray-400 text-xl font-medium">area:</p>
                                    <p className="text-xl font-semibold ml-1">{country.area} km</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center mt-4">
                                <p className="text-gray-400 text-xl font-medium">Borders</p>
                                <div className="grid grid-cols-6">
                                    {country.borders?.map((border, index) => (
                                        <p key={index} className="text-xl font-semibold m-2">{border}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center m-8">
                        <p className="text-gray-400 text-2xl font-medium">Description</p>
                        <p className="text-xl font-semibold mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus atque numquam inventore sunt, reprehenderit provident esse iusto eius laboriosam ipsam excepturi voluptatibus assumenda nobis tenetur labore architecto, maxime reiciendis.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-16">
                    <h2 className="text-gray-600 text-4xl font-semibold inline border-b-4 border-[#ad9efc] mb-8">Activities</h2>
                </div>       
            </div>
        </div>
    )
};

export default CountryDetail;