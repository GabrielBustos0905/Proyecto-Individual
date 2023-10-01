import { useState } from "react";
import { GoMultiSelect } from "react-icons/go";
import { useDispatch } from "react-redux";
import { orderBy } from "../redux/actions";


const ButtonOrder = ({name, setCurrentPage}) => {
    const [activated, setActivated] = useState(false);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(orderBy(e.target.innerText, name));
        setCurrentPage(2);
        setActivated(false)
    };

    return (
        <div>
            <div className="flex items-center mr-8 ml-8">
                <p className="text-md font-light mr-2">Order by {name}</p>
                <GoMultiSelect 
                    className="h-6 w-6 hover:scale-125 hover:duration-150"
                    onClick={() => {setActivated(activated ? false : true)}}
                    color={activated && "#8067ff" }
                />
            </div>

            <div className="flex justify-end items-center mr-8 ">
                    {
                        activated && (<div className="flex flex-col justify-center items-center bg-[#8067ff] mt-20 p-2 absolute">
                            <button onClick={(e) => handleClick(e)} className="hover:scale-110"><p className="text-md text-white font-semibold mb-1">Ascendent</p></button>
                            <button onClick={(e) => handleClick(e)} className="hover:scale-110"><p className="text-md text-white font-semibold">Descendent</p></button>
                        </div>)
                    }
            </div>
        </div>
    )
};

export default ButtonOrder;