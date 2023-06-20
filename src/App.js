import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import StudentData from './components/Studentdata';
// import { dataReducer } from './reducers/data';

function App() {
const dispatch = useDispatch();
const noDuplicateNames = useSelector((state)=> state.dataReducer)
console.log(noDuplicateNames);
  return (
    <>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/barchart">Barchart</Link>
          </li>
          <li>
            <Link to="/linechart">LineChart</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
        <Route path="/" element={<Home names={noDuplicateNames}/>}/>
        <Route path="/barchart"/>
        <Route path="/linechart"/>
            
        </Routes>
      </main>
<img src={logo} className="App-logo" alt="logo" />
    </Router>
  </>
  );
}

export default App;
