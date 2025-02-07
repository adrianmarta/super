import { useEffect, useState } from "react";
import { fetchSuperheroes, addSuperhero } from "./api";
import SuperheroForm from "./SuperheroForm";
import SuperheroList from "./SuperheroListing";
import "./App.css"; // Import custom styles

function App() {
    const [superheroes, setSuperheroes] = useState([]);

    // Fetch superheroes from the backend
    const loadSuperheroes = async () => {
        const heroes = await fetchSuperheroes();
        setSuperheroes(heroes);
    };

    useEffect(() => {
        loadSuperheroes(); // Fetch superheroes on initial render
    }, []);

    const handleAddSuperhero = async (newHero) => {
        await addSuperhero(newHero); // Add superhero
        await loadSuperheroes(); // Refresh list after adding
    };

    return (
        <div className="container">
            <div className="left-panel">
                <h2>Add a Superhero</h2>
                <SuperheroForm onAdd={handleAddSuperhero} />
            </div>
            <div className="right-panel">
                <h2>Superhero List</h2>
                <SuperheroList superheroes={superheroes} />
            </div>
        </div>
    );
}

export default App;
