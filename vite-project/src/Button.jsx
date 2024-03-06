

//Destructured

function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick})
{
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };

    return (
    <button onClick={() => handleClick("https://www.theodinproject.com")} style={buttonStyle} >
        {text}
        </button>
    );
}

/*
// Manual Default Prop Setting
Button.defaultProps = {
    text: "Click Me!",
    color: "blue",
    fontSize: 12
};
*/

export default function ButtonApp()
{
    const handleButtonClick = (url) =>
    {
        window.location.href = url;
    };

    return (
        <div>
            <Button handleClick={handleButtonClick} />
            
        </div>
    )
}