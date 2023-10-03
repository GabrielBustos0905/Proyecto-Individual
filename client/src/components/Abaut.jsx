import Navbar from "./Navbar";
import icon from "../assets/Icono.png";
import React from "../assets/react.png";
import Html from "../assets/html.png";
import Tailwind from "../assets/tailwind.png";
import Js from "../assets/js.png";
import Express from "../assets/express.jpg";
import Postgres from "../assets/postgres.png"

const Abaut = () => {
    const technologies = [React, Html, Tailwind, Js, Express, Postgres]

    return (
        <div className="h-full w-full bg-gray-100">
            <Navbar />
            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex justify-center items-center bg-white w-10/12">
                    <div className="flex justify-center items-center">
                        <div className="w-1/3 flex justify-center items-center m-4">
                            <img src={icon} alt="" className="w-60 h-60"/>
                        </div>
                        <div className="w-2/3 flex flex-col justify-center items-center m-4">
                            <h2 className="text-gray-600 text-4xl font-semibold inline border-b-4 border-[#ad9efc] mb-8">Project Description</h2>
                            <p className="text-xl font-light text-gray-800">Welcome to World in Detail, your window into the fascinating world of countries across the globe. Our platform offers you a unique visual experience to explore global diversity, from major capitals to the most authentic cultural activities.</p>
                            <p className="text-xl font-light text-gray-800 mt-4">
                            For my individual project at Soy Henry, I have been tasked with creating a website about countries. I have worked on it from the backend, using Sequelize for building models for the Postgres database, and Express for routing. I also worked on the frontend using React to create components, utilizing its hooks, Redux, Tailwind for page styling, Leaflet as the map for searching, and React-router-dom for website routing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-16 mb-8">
                    <p className="text-gray-600 text-4xl font-semibold inline border-b-4 border-[#ad9efc] mb-8">Technologies Used</p>
                    <div className="flex justify-center items-center">
                        {
                            technologies.map((tech, index) => {
                                return (
                                    <img id={index} src={tech} alt="" className="w-30 h-20 m-4"/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex justify-center items-center mt-16 mb-8">
                    <div className="flex flex-col justify-center items-center bg-white w-10/12">
                        <p className="text-gray-600 text-4xl font-semibold inline border-b-4 border-[#ad9efc] mb-8">Project Details</p>
                        <p className="text-xl font-light text-gray-800 mt-4 mr-4 ml-4 text-justify">
                            I have used Sequelize as an ORM for setting up the models (countries, activities) in the database using PostgreSQL, and Express to provide functionality to the web page (setting up the necessary routes). I'm not a backend developer, but I've put in the effort to make it as smooth and error-free as possible.
                        </p>
                        <p className="text-xl font-light text-gray-800 mt-4 mr-4 ml-4 text-justify">
                            I initialized the frontend using Vite, which is more efficient and optimized compared to Webpack. I used React throughout the entire webpage. On the home route ('/'), you'll see a navigation bar. In the countries section, there's a search and filtering menu for country cards, including sorting by name and population. In a separate route, I've created a form for creating activities using local states provided by the React hook. It's a validated form with image uploads to the Firebase cloud. I used react-router-dom for page routing. In the country detail route ('/countries/id'), you'll find details of the selected country, including information about the country and its location using the Leaflet API, as well as the activities it offers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Abaut;