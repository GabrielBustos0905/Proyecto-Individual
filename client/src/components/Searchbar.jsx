import React from "react";

const Searchbar = () => {
    return (
        <div className="flex justify-center items-center">
            <form action="">
                <input 
                    type="text"
                    name="searchbar"
                    placeholder="Searchbar"
                />
                <button className="p-4">Search</button>
            </form>
        </div>
    )
};

export default Searchbar;