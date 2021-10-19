
const Todo = ({todo, text, setTodos, todos}) => {

    // Events0
    const deleteHandler = () => {
        setTodos(todos.filter(t => t.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(t => {
            if (t.id === todo.id) {
                return {
                    ...t,
                    completed: !t.completed
                };
            }
            return t;
        }));
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;