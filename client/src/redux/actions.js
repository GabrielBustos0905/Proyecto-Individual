import axios from "axios";

export const getCountries = () => {
    return async function (dispatch){
            try {
                const json = await axios.get("/countries");
                return dispatch({
                    type: "GET_COUNTRIES",
                    payload: json.data
                })
            } catch (error) {
                return dispatch({
                    type: "ERROR",
                    payload: "Countries couldn't be loaded"
                })
            }
    }
};

export const getCountryDetail = (id) => {
    return async function(dispatch){
        let json = await axios.get(`/countries/${id}`)
        return dispatch({
            type: "GET_DETAILS",
            payload: json.data
        })
    }
};

export const searchCountryByName = (name) => {
    return async function (dispatch) {
        try {
            let json = await axios.get(`/countries?name=${name}`);
            return dispatch({
                type: "GET_NAME_COUNTRIES",
                payload: json.data
            })
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: "Country con dicho nombre, inexistente"
            })
        }
    }
};

export const filterBy = (value) => {
    return {
        type: "FILTER",
        payload: value
    }
};

export const getActivities = () => {
    return async function(dispatch){
        try {
            const json = await axios.get('/activities');
            return dispatch({
                type: "GET_ACTIVITIES",
                payload: json.data
            })
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: "Activities coulden't be loaded"
            })
        }
    }
};

export const createActivity = (data) => {
    return async function(dispatch){
        const json = await axios.post('/activities', data);
        return json;
    }
};

export const orderBy = (value, property) => {
    return function(dispatch){
        if(property === "Name") {
            return dispatch({
                type: "ORDER_BY_NAME",
                payload: value
            })
        }
        return dispatch({
            type: "ORDER_BY_POPULATION",
            payload: value
        })
    }
};

