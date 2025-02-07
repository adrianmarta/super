import { useForm } from "react-hook-form";

function SuperheroForm({ onAdd }) {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            data.humilityScore = Number(data.humilityScore);
            await onAdd(data); // Add superhero & refresh list
            reset(); // Clear form after submission
        } catch (error) {
            alert("Error adding superhero: " + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="superhero-form">
            <input {...register("name", { required: true })} placeholder="Name" />
            <input {...register("superpower", { required: true })} placeholder="Superpower" />
            <input type="number" {...register("humilityScore", { required: true, min: 1, max: 10 })} placeholder="Humility Score (1-10)" />
            <button type="submit">Add Superhero</button>
        </form>
    );
}

export default SuperheroForm;
