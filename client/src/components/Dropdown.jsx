import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai"
import { filterBy } from "../redux/actions";
import { useDispatch } from "react-redux";

const Dropdown = ({ name, content }) => {
    const [ menu, setMenu ] = useState(false);
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e)
        dispatch(filterBy(e.target.innerText));
        setMenu(!menu)
    };

    return (
        <div>
            <div className="bg-[#8067ff] w-auto h-9 flex items-center justify-center m-2 rounded-sm">
                <button onClick={() => setMenu(!menu)} className="flex">
                    <p className="text-gray-50 font-semibold mr-1">{name}</p>
                    {
                        !menu ? <AiFillCaretDown className="text-gray-50 mt-[5px] ml-1 duration-300"/> :
                        <AiFillCaretDown className="text-gray-50 mt-[5px] ml-1 -rotate-180 duration-300"/>
                    }
                </button>
            </div>
            <div>
                    {
                        menu && (
                            <div className="w-auto m-2 h-auto bg-[#8067ff] flex flex-col cursor-pointer relative">
                                {
                                    content?.map(c => {
                                        return (
                                            <div key={c} className="h-10 flex items-center m-1 hover:bg-[#937efd]">
                                                <button value={c} onClick={(e) => {handleClick(e)}}>
                                                    <p className="font-medium text-lg text-gray-50">{c}</p>
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
            </div>
        </div>
    )
};

export default Dropdown;