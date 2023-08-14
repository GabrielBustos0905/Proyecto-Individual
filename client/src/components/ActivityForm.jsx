import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { AiFillWarning } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import addImage from "../assets/add.png";
import { createActivity, getCountries } from "../redux/actions";
import { uploadFile } from "../firebase/config";
import Navbar from "./Navbar";

const ActivityForm = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const countriesNames = countries.map(c => c.name);
    const seasons = ['summer', 'autumn', 'winter', 'spring'];

    // ---------- Estados de Difficulty -------------
    const [difficulty, setDifficulty ] = useState(null);
    const [hover, setHover] = useState(null);
    // ----------------------------------------------

    // -------------- Estados del file --------------
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);
    // ----------------------------------------------

    const { register, handleSubmit, watch, formState:{errors}, setValue } = useForm({defaultValues:{
        name: "",
        image: "",
        difficulty: "",
        duration: "",
        season: "winter",
        countries: []
    }});

    console.log(errors)

    const onChange = (e) => {
        const data = watch(`${e.target.name}`)
        data.push(e.target.value);
    };

    const handleChangeDifficulty = (e) => {
        setValue("difficulty", e.target.value)
    };

    const handleChangeFile = async(e) => {
        try {
            setFile(e.target.files[0]);
            const result = await uploadFile(file);
            setValue("image", result);
            setUrl(result)
        } catch (error) {
            console.log(error.message)
        }
    };

    const onSubmit = handleSubmit((data) => {
            console.log(data);
            dispatch(createActivity(data))
        }
    );
    
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch]);

    return (
        <div className="h-full w-full bg-gray-100">
            <Navbar />
            <div className="h-screen mt-4 flex justify-center items-center">
                <form className="flex flex-col jusify-center items-center bg-white shadow-lg shadow-gray-200 p-6">
                    <div className="flex flex-col w-full mb-4 p-2">
                        <label className="text-xs font-medium text-gray-500 pb-2">Name</label>
                        <input 
                            type="text"
                            className="border-b focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Name debe tener minimo 2 letras"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Name debe tener maximo 20 letras"
                                }
                            })}
                            />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>

                    <div className="flex flex-col w-full mb-4 p-2">
                        <label className="text-xs font-medium text-gray-500 pb-2">Image</label>
                        <input 
                            type="file" 
                            onChange={e => handleChangeFile(e)}
                            className="file:bg-purple-600 file:border-none file:text-white file:text-lg file:font-medium file:rounded-md file:p-2 file:cursor-pointer file:hover:bg-purple-400 file:duration-150"
                        />
                    </div>

                    <div className="flex flex-col w-full mb-4 p-2 items-center">
                        <label className="text-xs font-medium text-gray-500 pb-2">Difficulty</label>
                        <div className="flex justify-center items-center">
                            {
                                [...Array(5)].map((icon, index) => {
                                    const difficultyValue = index + 1;

                                    return (
                                        <label className="text-[12px]" key={index}>
                                            <input 
                                                type="radio"
                                                {
                                                    ...register("difficulty", {
                                                        required:{
                                                            value: true,
                                                            message: "Difficulty is required"
                                                        }
                                                    })
                                                }
                                                value={difficultyValue}
                                                onClick={() => setDifficulty(difficultyValue)}
                                                onChange={(e) => handleChangeDifficulty(e)}
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
                        {errors.difficulty && <span>{errors.difficulty.message}</span>}
                    </div>
                    
                    <div className="flex items-center w-full justify-between">
                        <div div className="flex flex-col mb-4 p-2w-5/12">
                            <label className="text-xs font-medium text-gray-500 pb-2">Duration</label>
                            <input 
                                type="time" 
                                {...register("duration")}    
                            />
                        </div>

                        <div div className="flex flex-col mb-4 p-2 w-5/12">
                            <label className="text-xs font-medium text-gray-500 pb-2">Season</label>
                            <select name="season" onChange={e => onChange(e)}>
                                {
                                    seasons.map((s, id) => {
                                        return (
                                            <option key={id} value={s}>{s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div div className="flex flex-col w-full mb-4 p-2">
                        <label className="text-xs font-medium text-gray-500 pb-2">Select Countries</label>
                        <select name="countries" onChange={e => onChange(e)}>
                            {
                                countriesNames?.map((country, id) => {
                                    return (
                                        <option key={id} value={country}>{country}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="w-full h-10 mt-6 bg-blue-200 flex justify-center items-center">
                        <button onSubmit={onSubmit}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default ActivityForm;