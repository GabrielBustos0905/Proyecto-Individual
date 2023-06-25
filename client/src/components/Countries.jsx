import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/actions";
import CardCountry from "./CardCountry";
import Searchbar from "./Searchbar";

const Countries = () => {
    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div className="pt-60 w-full h-full bg-gray-100">
            <div className="p-8 m-auto w-11/12 h-40 flex justify-between items-center bg-[#8067ff] shadow-xl rounded-3xl mb-8">
                <p className="text-4xl font-bold text-gray-50">Countries of te World</p>
                <Searchbar />
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
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