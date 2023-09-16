export const validate = (input) => {
    const error = {};

    if(!input.name) error.name = "Name is required";
    if(!input.image) error.image = "Image is required";
    if(input.difficulty.length <= 0 ) error.difficulty = "Difficulty is required";
    if(input.duration.length <= 0) error.duration = "Duration is required";
    if(input.season.length <= 0) error.season = "Season is required";
    if(input.countries.length <= 0) error.countries = "Country is required";

    return error;
}