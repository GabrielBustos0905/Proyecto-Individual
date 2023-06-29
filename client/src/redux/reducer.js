const initialState = {
    countries: [],
    allCountries: [],
    activities: []
};

const rootReducer = (state = initialState, action) => {
    const allCountries = state.allCountries;
    const actualCountries = state.countries;
    
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

        case "GET_ACTIVITIES": {
            return {
                ...state,
                activities: action.payload
            }
        }

        case "FILTER": {
            const continentFiltered = allCountries.filter(c => c.continent === action.payload);

            if(continentFiltered.length) {
                return {
                    ...state,
                    countries: continentFiltered
                }
            };

            const findCountries = allCountries.filter(c => c.activities.length > 0 ? c.name : null)
            // console.log(findCountries)
            const activityFiltered = findCountries.filter(c => c.activities.find(a => a.name === action.payload));

            if(activityFiltered.length){
                return{
                    ...state,
                    countries: activityFiltered
                }
            }
        }

        default:
            return {
                ...state
            }
    }
};

export default rootReducer;