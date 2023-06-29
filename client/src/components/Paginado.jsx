import React from "react";

export default function Paginado({ countriesPerPage, allCountries, paginado }){
    const pageNumber = [];
    
    // const firstCountries = allCountries.slice(0, 8)

    for(let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++){
        pageNumber.push(i)
    };

    return (
        <div className="flex justify-center items-cent p-4">
            <ul className="flex mt-4">
                {
                    pageNumber && pageNumber.map(number => (
                        <li key={number} onClick={() => paginado(number)} className="flex justify-center items-center m-2 cursor-pointer rounded-sm bg-[#8067ff] hover:bg-[#937efd] w-9 h-9">
                            <a className="font-medium text-lg text-gray-50">{number}</a>
                        </li>
                    )) 
                }
            </ul>
        </div>
    )
};