import './App.css';
import logo from './logo.svg';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">

<Navbar></Navbar>
<h1>Home page</h1>
<img src={logo} className="App-logo" alt="logo" />


    </div>
  );
}

export default App;