import axios from "axios";

export const getCountries = () => {
    return async function (dispatch){
            try {
                const json = await axios.get("http://localhost:3001/countries");
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

export const searchCountryByName = (name) => {
    return async function (dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/countries?name=${name}`);
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
            const json = await axios.get('http://localhost:3001/activities');
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

