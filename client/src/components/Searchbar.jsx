import React from "react";
import search from "../assets/search.png"

const Searchbar = () => {
    return (
        <div className="flex justify-center items-center bg-white w-auto p-2 rounded-2xl h-14">
            <form action="" className="flex justify-center items-center">
                <input 
                    type="text"
                    name="searchbar"
                    placeholder="Search Country"
                    aria-label="Search country"
                    className="w-72 h-10 p-2 border mr-4 text-xl outline-none bg-white border-none"
                />
                <button className="h-10 w-10"><img src={search} alt="" className="h-8 w-8"/></button>
            </form>
        </div>
    )
};

export default Searchbar;