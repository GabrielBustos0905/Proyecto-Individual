import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../redux/actions";
import Navbar from "./Navbar";

const CountryDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const country = useSelector((state) => state.countryDetail);

    useEffect(() => {
        dispatch(getCountryDetail(id))
    }, []);

    return (
        <div className="h-screen w-full bg-gray-100">
            <Navbar />
            <div className="flex justify-center items-center mt-10">
                <div className="flex jusify-between bg-white">
                    <div className="h-40 w-40">
                        <img src={country.flag} alt="" className="" />
                    </div>
                    <div>
                        <h2>{country.name}</h2>
                        <p>{country.continent}</p>
                        <p>{country.capital}</p>
                        <p>{country.subregion}</p>
                        <p>{country.area}</p>
                        <p>{country.population}</p>
                        {
                            country.borders ? country.borders.map((country, id) => {
                                return (
                                    <p key={id}>{country}</p>
                                )
                            }) :
                            <p>No borders</p>
                        }
                        <p>{country.timezones}</p>
                        {
                            country.activities ? country.activities.map((activity, id) => {
                                return (
                                    <div key={id}>
                                        <p>{activity.name}</p>
                                        <p>{activity.difficulty}</p>
                                        <p>{activity.duration}</p>
                                        <p>{activity.season}</p>
                                    </div>
                                )
                            }) : <p>No activities</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CountryDetail;