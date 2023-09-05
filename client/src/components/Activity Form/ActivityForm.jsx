import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillWarning, AiOutlineDelete } from "react-icons/ai";
import { createActivity, getCountries } from "../../redux/actions";
import { uploadFile } from "../../firebase/config";
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

    const [error, setError] = useState({
        name: "",
        image: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: ""
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };

    const handleChangeImge = async (e) => {
        setFile(e.target.files[0])
        try {
            const result = await uploadFile(file);
            console.log(result);
            setUrl(result)
            setInput({
                ...input,
                image: url
            })
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

    const hanldeChangeError = (e) => {
        if(e.target.name === "name"){
            e.target.value.length <= 0 ? setError({...error, name: "Name is required"}) : setError({...error, name: ""})
        };
        if(e.target.name === "difficulty"){
            e.target.value.length <= 0 ? setError({...error, difficulty: "Difficulty is required"}) : setError({...error, difficulty: ""})
        }
        console.log(error)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    };
    
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    return (
        <div className="h-full w-full bg-gray-100">
            <Navbar />
            <div className="h-full mt-12 flex justify-center items-center">
                <form id="form" name="form" className="flex flex-col jusify-center items-center bg-white shadow-lg shadow-gray-200 p-6" onSubmit={e => handleSubmit(e)}>
                    <div className="flex flex-col w-full mb-4 p-2">
                        <label className="text-xs font-medium text-gray-500 pb-2">Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={(e) => handleChange(e)}
                            onBlur={e => hanldeChangeError(e)}
                            className="border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors"
                        />
                        <span className="text-red-600 text-sm ">{error.name}</span>
                    </div>

                    <div className="flex flex-col w-full mb-4 p-2">
                        <label className="text-xs font-medium text-gray-500 pb-2">Image</label>
                        <input 
                            type="file"
                            className="file:bg-purple-600 file:border-none file:text-white file:text-lg file:font-medium file:rounded-md file:p-2 file:cursor-pointer file:hover:bg-purple-400 file:duration-150 text-gray-500 text-sm"
                            onChange={e => handleChangeImge(e)}
                        />
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
                                                value={input.difficulty}
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
                    </div>
                     
                    <div div className="flex flex-col w-full mb-6 p-2 justify-center">
                        <label className="text-xs font-medium text-gray-500 pb-2">Duration</label>
                        <div className="w-full flex justify-center items-center">
                            <input 
                                type="time"
                                className="w-20 border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors" 
                                onChange={e => handleChange(e)}
                            />
                        </div>
                    </div>

                    <div div className="flex flex-col w-full mb-6 p-2 justify-center">
                        <label className="text-xs font-medium text-gray-500 pb-2">Season</label>
                        <select name="season" className="bg-purple-200 w-full h-10" onChange={e => handleSelect(e)}>
                            {
                                seasons.map((s, id) => {
                                    return (
                                        <option key={id} value={s}>{s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()}</option>
                                    )
                                })
                            }
                        </select>

                        {
                            input.season.length > 0 && 
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
                        }
                        
                    </div>
                    
                    <div div className="flex flex-col w-full mb-4 p-2">
                        <label className="text-xs font-medium text-gray-500 pb-2">Select Countries</label>
                        <select name="countries" className="bg-purple-200 w-full h-10" onChange={e => handleSelect(e)}>
                            {
                                countriesNames?.map((country, id) => {
                                    return (
                                        <option key={id} value={country}>{country}</option>
                                    )
                                })
                            }
                        </select>

                        {
                            input.countries.length > 0 && 
                                <div className="grid lg:grid-cols-3 justify-center items-center m-4">
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
                        }
                    </div>

                    <div className="w-full h-10 mt-6 bg-purple-600 flex justify-center items-center">
                        <button className="h-full w-full hover:bg-purple-400 duration-300 text-white font-bold"><p className="hover:scale-110">Create</p></button>
                    </div>
                </form>
                <img src={url} alt="" />
            </div>
        </div>
    )
};

export default ActivityForm;