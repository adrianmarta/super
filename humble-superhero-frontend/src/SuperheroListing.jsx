function SuperheroList({ superheroes }) {
    return (
        <ul className="superhero-list">
            {superheroes.map((hero) => (
                <li key={hero.id}>
                    <strong>{hero.name}</strong> - {hero.superpower} (Humility: {hero.humilityScore})
                </li>
            ))}
        </ul>
    );
}

export default SuperheroList;
