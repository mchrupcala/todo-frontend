import logo from './logo.svg';
import './App.css';
import { addTodo, getTodos } from './contracts/utils';

function App() {

  const handleGetTodos = async () => {
    const tx = await getTodos();
    console.log(tx);
  };

  const handleAddTodo = async () => {
    const el = document.getElementById('input-box');
    console.log(el.value);
    const tx = await addTodo(el.value);
    console.log(tx);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>

      <input id="input-box" type="text" />

      <button onClick={() => handleGetTodos()}>Get Todos</button>
      <button onClick={() => handleAddTodo()}>Add Todo</button>
    </div>
  );
}

export default App;
