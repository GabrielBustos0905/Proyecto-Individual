import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getCountries } from "../redux/actions";
import CardCountry from "./CardCountry";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";
import Paginado from "./Paginado";

const Countries = () => {
    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities);
    const nameActivities = activities.map(a => a.name)

    const continents = ["Africa", "Antarctica", "Asia", "Europe", "North America", "South America"];

    // --------- Paginado ------------ 
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const [orden, setOrden] = useState('');
    const indexOfLastCountry = currentPage === 1 ? 9 : currentPage * countriesPerPage - 1;
    const indexOfFirstCountry = currentPage === 1 ? 0 : indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };
    // -------------------------------

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch]); 

    return (
        <div className="pt-60 w-full h-full bg-gray-100">
            <div className="p-8 m-auto w-11/12 h-40 flex flex-col items-center bg-[#8067ff] shadow-xl rounded-3xl mb-20">
                <div className="flex justify-between items-center w-full h-full mt-5">
                    <p className="text-4xl font-bold text-gray-50">Countries of te World</p>
                    <Searchbar setCurrentPage={setCurrentPage}/>
                </div>
                <div className="h-20 w-1/3 grid grid-cols-2 bg-white mt-8 p-4 rounded-xl shadow-lg">
                    <Dropdown name={"Continents"} content={continents} setCurrentPage={setCurrentPage}/>
                    <Dropdown name={"Activities"} content={nameActivities} setCurrentPage={setCurrentPage}/>
                </div>
            </div>

            <Paginado 
                countriesPerPage={countriesPerPage}
                allCountries={countries.length}
                paginado={paginado}
            />

            <div className="h-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                {
                    currentCountries ? currentCountries.map(c => {
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