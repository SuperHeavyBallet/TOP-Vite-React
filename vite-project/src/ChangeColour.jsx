import { useState } from "react";


export default function ChangeColor()
{
    const [backgroundColor, setBackgroundColor] = useState("red");
    const [text, setText] = useState("Red");
    const [textColor, setTextColor] = useState("white");
    const [ changeCounter, setChangeCounter ] = useState(0);

    function onClickHandler()
    {
        if (text === "Red")
        {
            setText("Blue");
            setBackgroundColor("blue");
            setTextColor("white");
        }
        else if (text === "Blue")
        {
            setText("Red");
            setBackgroundColor("red");
            setTextColor("white");
        }

        setChangeCounter(changeCounter + 1);
        
    }
   
    

    return (
        <div>
            <h3>
                {changeCounter}
            </h3>
            <button onClick={onClickHandler}
            style={{
                backgroundColor : backgroundColor,
                color : textColor
                }}>
                {text}

            </button>
        </div>
    )
    

}