import logo from './bonasLogo.svg';
import './App.css';

import TodoForm from './components/PrdForm';
import TodoList from './components/PrdList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>bonas-connect.web.app<br/>2023-07-20</p>

        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;

// https://console.firebase.google.com/project/bonas-connect/firestore/data/
// https://bonas-connect.web.app/
