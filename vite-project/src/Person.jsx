import { useState } from "react"

export default function Person()
{
    const [ person, setPerson ] = useState({ name: "John", age: 100});

    const handleAgeIncrease = () => {
        setPerson({ ...person, age: person.age + 1});
    };

    const [ firstNameValue, setFirstNameValue ] = useState("");
    const [ lastNameValue, setLastNameValue ] = useState("");

    return (
        <>
        <input
        type="text"
        value={firstNameValue}
        onChange={(event) => setFirstNameValue(event.target.value)}>
        </input>

        <input
        type="text"
        value={lastNameValue}
        onChange={(event) => setLastNameValue(event.target.value)}>
        </input>

        

        <h1>{firstNameValue}  {lastNameValue}</h1>

            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleAgeIncrease}>Increase Age!</button>
        </>
    );
}