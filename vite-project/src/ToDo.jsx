const todos = [
    { task: "mow the yard", id: "todo01"},
    { task: "Work on Odin Projects", id: "todo02"},
    { task: "feed the cat", id: "todo03"}
];

function ToDoList(){
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    )
}

export { ToDoList };