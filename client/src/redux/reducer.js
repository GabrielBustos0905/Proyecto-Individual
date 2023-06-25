const initialState = {
    countries: [],
    allCountries: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COUNTRIES": {
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        }

        case "GET_NAME_COUNTRIES": {
            return {
                ...state,
                countries: action.payload
            }
        }

        default:
            return {
                ...state
            }
    }
};

export default rootReducer;