import { useState } from "react";

export default function CustomInput()
{
    const [ value, setValue ] = useState("");

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            >
            </input>

            <h1>
                {value}
            </h1>
        </div>
    )

}