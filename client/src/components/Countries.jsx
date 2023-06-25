import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/actions";
import CardCountry from "./CardCountry";

const Countries = () => {
    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div className="pt-60 w-full h-screen bg-gradient-to-b from-pink-100 via-white">
            <div className="p-8 flex justify-between items-center">
                <p className="text-4xl font-bold inline border-b-4 border-pink-200">Countries of te World</p>
            </div>

            <div className="grid grid-cols-2">
                {
                    countries ? countries.map(c => {
                        return (
                            <div key={c.id}>
                                <CardCountry 
                                    name={c.name}
                                    flag={c.flag}
                                    continent={c.continent}
                                    capital={c.capital}
                                />
                            </div>
                        )
                    }) : <p>Hola</p>
                }
            </div>
        </div>
    )
};

export default Countries;