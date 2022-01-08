import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
     <div className="animation">
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home/> }/>
        <Route path="/home" element={ <Home/> }/>
      </Routes>
      </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
