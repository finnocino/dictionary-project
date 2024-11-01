import logo from "./logo-shecodes.png";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
       <button type="button" className="btn btn-success"> Hello</button>
      </header>
    </div>
  );
}

