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