import React, { useState } from "react";
import search from "../assets/search.png"
import { useDispatch } from "react-redux";
import { searchCountryByName } from "../redux/actions";

const Searchbar = ({ setCurrentPage }) => {
    const dispatch = useDispatch();
    const [ input, setInput ] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
        console.log(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchCountryByName(input));
        setInput("");
        setCurrentPage(1)
    };
 
    return (
        <div className="flex justify-center items-center bg-white w-auto p-2 rounded-2xl h-14">
            <form action="" className="flex justify-center items-center" onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text"
                    name="searchbar"
                    onChange={(e) => handleChange(e)}
                    placeholder="Search Country"
                    aria-label="Search country"
                    className="w-72 h-12 border mr-4 text-xl outline-none bg-white border-none"
                />
                <button className="h-12 w-12 flex justify-center items-center rounded-r-2xl hover:bg-[#c3b8fd] duration-700"><img src={search} alt="" className="h-8 w-8"/></button>
            </form>
        </div>
    )
};

export default Searchbar;