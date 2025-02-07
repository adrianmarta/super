import axios from "axios";

const API_URL = "http://localhost:3000/superheroes";

export const fetchSuperheroes = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addSuperhero = async (superhero) => {
    const response = await axios.post(API_URL, superhero);
    return response.data;
};
