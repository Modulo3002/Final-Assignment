import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from './components/Home';
import {averageRatingSubject, namesOfStudents} from './components/Studentdata';
import ViewStudent from './components/ViewStudent';


function App() {
//routing toegepast, path student:name zodat gemapte link bereikt kan worden

const allPeople = useSelector((state)=> state.dataReducer)
const linkNames = namesOfStudents.map((name)=>{
  return <button><Link to={`/student/${name}`}>{name}</Link></button>
})
console.log(averageRatingSubject)
const avgRatingSubject = averageRatingSubject;
  return (
    <>
    <Router>
      <nav>
        <button><Link to="/">Home</Link></button>    
        {linkNames} 
      </nav>
      <main>
       <Routes>
        <Route path="/" element={<Home allPeople={allPeople}/>}/>
        <Route path="student/:name" element={<ViewStudent rating={avgRatingSubject}/>} />
       </Routes>
      </main>
    </Router>
  </>
  );
}

export default App;
