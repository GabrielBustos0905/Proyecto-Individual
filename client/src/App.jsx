import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";
import ActivityForm from "./components/Activity Form/ActivityForm";
import Abaut from "./components/Abaut";

const App = () => {
    
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route exact path="/:id" element={<CountryDetail />} />
                        <Route exact path="/activityForm" element={<ActivityForm />} />
                        <Route exact path="/abaut" element={<Abaut />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    )
};

export default App;