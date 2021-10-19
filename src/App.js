import {useState, useEffect} from 'react';
import './App.css';

// Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    saveTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  // Saving todos to local storage
  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zaid's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
