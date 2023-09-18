import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillWarning, AiOutlineDelete } from "react-icons/ai";
import { createActivity, getCountries } from "../../redux/actions";
import { uploadFile } from "../../firebase/config";
import { validate } from "./validate";
import Navbar from "../Navbar";

const ActivityForm = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const countriesNames = countries.map(c => c.name);
    const seasons = ['summer', 'autumn', 'winter', 'spring'];

    // ---------- Estados del input -----------------
    const [input, setInput] = useState({
        name: "",
        image: "",
        difficulty: "",
        duration: "",
        season: [],
        countries: []
    })

    // ---------- Estados de Difficulty -------------
    const [difficulty, setDifficulty ] = useState(null);
    const [hover, setHover] = useState(null);
    // ----------------------------------------------

    // -------------- Estados del file --------------
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);
    // ----------------------------------------------

    // ------------------ Errors --------------------
    const [inputErrors, setInputErrors] = useState({
        name: "",
        image: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: ""
    });
    const [isSubmit, setIsSubmit] = useState(false);
    // ------------------------------------------------

    // const [error, setError] = useState({
    //     name: "",
    //     image: "",
    //     difficulty: "",
    //     duration: "",
    //     season: "",
    //     countries: ""
    // })

    const handleChange = (e) => {
        console.log(e.target.value)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    const handleChangeImge = async (e) => {
        setFile(e.target.files[0])
        // console.log(e.target.files[0])
        try { 
            if(!/.*(png|jpg|jpeg|gif)$/.test(e.target.files[0].type)){
                setInputErrors({
                    ...inputErrors,
                    image: "Enter a URL image .png, .jpg, .jpeg, .gif"
                })
            }
            const result = await uploadFile(e.target.files[0]);
            // console.log(`Resultadp: ${result}`)
            setUrl(result)
            setInput({
                ...input,
                image: result
            })
            // console.log(`Image: ${input.image}`)
        } catch (error) {
            console.log(error)
        }
    };

    const handleSelect = (e) => {
        if (!input[e.target.name].includes(e.target.value)) {
            setInput({
              ...input,
              [e.target.name]: [...input[e.target.name], e.target.value],
            });
        }
    };

    const handleDeleteSeason = (s) => {
        setInput({
            ...input,
            season: input.season.filter(value => value !== s)
        })
    };

    const handleDeleteCountry = (c) => {
        setInput({
            ...input,
            countries: input.countries.filter(value => value !== c)
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        setInputErrors(validate(input));
        setIsSubmit(true);
    };

    useEffect(() => {
        if(Object.keys(inputErrors).length === 0 && isSubmit) {
            console.log(input);
            dispatch(createActivity(input));
            alert("Activity was Created succesfully");
        }
    }, [inputErrors]);

    useEffect(() => {
        setInput(input)
    }, [input]);

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    return (
        <div className="h-full w-full bg-gray-100">
            <Navbar />
            <div className="h-full mt-12 flex justify-center items-center">
                <form id="form" name="form" className="flex flex-col jusify-center items-center bg-white shadow-lg shadow-gray-200 p-6" onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex flex-col w-full mb-4 p-2">
                        <label className="text-xs font-medium text-gray-500 pb-2">Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={(e) => handleChange(e)}
                            className="border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors"
                        />
                        {inputErrors.name && <span className="text-red-600 text-sm">{inputErrors.name}</span>}
                    </div>

                    <div className="flex flex-col w-full mb-4 p-2">
                        <label className="text-xs font-medium text-gray-500 pb-2">Image</label>
                        <input 
                            type="file"
                            className="file:bg-purple-600 file:border-none file:text-white file:text-lg file:font-medium file:rounded-md file:p-2 file:cursor-pointer file:hover:bg-purple-400 file:duration-150 text-gray-500 text-sm"
                            onChange={e => handleChangeImge(e)}
                        />
                        {inputErrors.image && <span className="text-red-600 text-sm">{inputErrors.image}</span>}
                    </div>

                    <div className="flex flex-col w-full mb-6 p-2 justify-center">
                        <label className="text-xs font-medium text-gray-500 pb-2">Difficulty</label>
                        <div className="flex justify-center items-center">
                            {
                                [...Array(5)].map((icon, index) => {
                                    const difficultyValue = index + 1;

                                    return (
                                        <label className="text-[12px]" key={index}>
                                            <input 
                                                type="radio"
                                                name="difficulty"
                                                value={difficultyValue}
                                                onClick={() => setDifficulty(difficultyValue)}
                                                onChange={e => handleChange(e)}
                                                className="hidden"
                                            />

                                            <AiFillWarning
                                                size={25}
                                                onMouseEnter={() => setHover(difficultyValue)}
                                                onMouseLeave={() => setHover(null)}
                                                color={difficultyValue <= (hover || difficulty) ? "#ffc107" : "gray"}
                                                className="cursor-pointer ease-in duration-300 mr-1"
                                            />
                                        </label>
                                    ) 
                                })
                            }
                        </div>
                        {inputErrors.difficulty && <span className="text-red-600 text-sm">{inputErrors.difficulty}</span>}
                    </div>
                     
                    <div div className="flex flex-col w-full mb-6 p-2 justify-center">
                        <label className="text-xs font-medium text-gray-500 pb-2">Duration</label>
                        <div className="w-full flex justify-center items-center">
                            <input 
                                type="time"
                                name="duration"
                                value={input.duration}
                                className="w-20 border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors" 
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        {inputErrors.duration && <span className="text-red-600 text-sm">{inputErrors.duration}</span>}
                    </div>

                    <div div className="flex flex-col w-full mb-6 p-2 justify-center">
                        <label className="text-xs font-medium text-gray-500 pb-2">Season</label>
                        <select name="season" className="bg-purple-200 w-full h-10 rounded-md" onChange={e => handleSelect(e)}>
                            {
                                seasons.map((s, id) => {
                                    return (
                                        <option key={id} value={s}>{s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()}</option>
                                    )
                                })
                            }
                        </select>
                        {inputErrors.season && <span className="text-red-600 text-sm">{inputErrors.season}</span>}
                    </div>
                    
                    <div div className="flex flex-col w-full mb-4 p-2">
                        <label className="text-xs font-medium text-gray-500 pb-2">Select Countries</label>
                        <select name="countries" className="bg-purple-200 w-full h-10 rounded-md" onChange={e => handleSelect(e)}>
                            {
                                countriesNames?.map((country, id) => {
                                    return (
                                        <option key={id} value={country}>{country}</option>
                                    )
                                })
                            }
                        </select>
                        {inputErrors.countries && <span className="text-red-600 text-sm">{inputErrors.countries}</span>}
                    </div>

                    <div className="w-full h-10 mt-6 bg-purple-600 flex justify-center items-center">
                        <button className="h-full w-full hover:bg-purple-400 duration-300 text-white font-bold"><p className="hover:scale-110">Create</p></button>
                    </div>
                </form>

                {
                    input.season.length > 0 || input.countries.length > 0 ?
                        <div className="flex flex-col justify-center items-center m-8 p-4 bg-white shadow-md">
                        {
                            input.season.length > 0 &&
                                <div className="w-full">
                                    <p className="text-gray-500 font-semibold text-lg ml-5">Seasons</p>
                                    <div className="grid lg:grid-cols-3 justify-center items-center m-4">
                                        {
                                            input.season.map((s, index) => {
                                                return (
                                                    <div key={index} className="flex justify-between items-center bg-purple-400 rounded-md p-1 m-1">
                                                        <p className="text-white font-semibold mr-2">{s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()}</p>
                                                        <button onClick={() => handleDeleteSeason(s)}><AiOutlineDelete color="red"/></button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                        }
                        {
                            input.countries.length > 0 &&
                                <div className="w-full mt-8">
                                    <p className="text-gray-500 font-semibold text-lg ml-5">Countries</p>
                                    <div className="grid lg:grid-cols-2 justify-center items-center m-4">
                                        {
                                            input.countries.map((c, index) => {
                                                return (
                                                    <div key={index} className="flex justify-between items-center bg-purple-400 rounded-md p-1 m-1">
                                                        <p className="text-white font-semibold mr-2">{c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()}</p>
                                                        <button onClick={() => handleDeleteCountry(c)}><AiOutlineDelete color="red"/></button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            }
                        </div> : <p></p>
                }
            </div>
        </div>
    )
};

export default ActivityForm;