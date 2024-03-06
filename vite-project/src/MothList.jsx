const months = [
    "January", 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
]

function MonthList()
{
    return (
        <ul>
            {months.map((month, index) => (<li key={index}>{month}</li>))}
        </ul>
    );
}

export { MonthList };