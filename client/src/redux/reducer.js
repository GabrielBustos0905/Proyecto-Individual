const initialState = {
    countries: [],
    allCountries: [],
    countryDetail: [],
    activities: [],
    borders: []
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
            const activityFiltered = findCountries.filter(c => c.activities.find(a => a.name === action.payload));

            if(activityFiltered.length){
                return{
                    ...state,
                    countries: activityFiltered
                }
            }
        }

        case "GET_DETAILS":{
            return{
                ...state,
                countryDetail: action.payload
            }
        }

        case 'ORDER_BY_NAME':

            const sortedArray = action.payload === "Ascendent" ? actualCountries.sort(function(a, b){
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return 0
            }) : actualCountries.sort(function(a, b){
                if(a.name > b.name) return -1
                if(b.name > a.name) return 1
                return 0
            })

            return {
                ...state,
                countries: sortedArray
            }
        

        case 'ORDER_BY_POPULATION': 
            const poblationArray = action.payload === "Descendent" ? actualCountries.sort(function(a, b){
                if(a.population > b.population) return 1;
                if(b.population > a.population) return -1;
                return 0
            }) : actualCountries.sort(function(a, b){
                if(a.population > b.population) return -1
                if(b.population > a.population) return 1
                return 0
            })

            return {
                ...state,
                countries: poblationArray
            }
        

        default:
            return {
                ...state
            }
    }
};

export default rootReducer;