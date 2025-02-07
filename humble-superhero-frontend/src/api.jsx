import axios from "axios";

const API_URL = "http://localhost:3000/superheroes";// the backend api url

export const fetchSuperheroes = async () => {       // api call to the backend for listing superheroes
    const response = await axios.get(API_URL);
    return response.data;
};

export const addSuperhero = async (superhero) => {      // api call for adding a superhero
    const response = await axios.post(API_URL, superhero);
    return response.data;
};
