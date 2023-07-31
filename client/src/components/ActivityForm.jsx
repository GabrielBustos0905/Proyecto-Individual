import React from "react";
import Navbar from "./Navbar";

const ActivityForm = () => {
    return (
        <div className="h-full w-full bg-gray-100">
            <Navbar />
            <div className="flex justify-center items-center h-screen w-full">
                <form>
                    <div>
                        <label>Name:</label>
                        <input 
                            type="text" 
                            name="name"  
                        />
                    </div>
                    <div>
                        <label>Image:</label>
                        <input 
                            type="" 
                            name="name"  
                        />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input 
                            type="text" 
                            name="name"  
                        />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input 
                            type="text" 
                            name="name"  
                        />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input 
                            type="text" 
                            name="name"  
                        />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default ActivityForm;