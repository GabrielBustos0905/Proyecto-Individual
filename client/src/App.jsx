import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";

const App = () => {
    
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route exact path="/:id" element={<CountryDetail />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    )
};

export default App;