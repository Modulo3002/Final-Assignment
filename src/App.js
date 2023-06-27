import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import * as V from 'victory'
import { VictoryChart, VictoryBar } from 'victory';
import Home from './components/Home';
import {StudentData, averageRatingSubject, averageScoreSubject, namesOfStudents} from './components/Studentdata';
import ViewStudent from './components/ViewStudent';
// import { dataReducer } from './reducers/data';

function App() {
const dispatch = useDispatch();
const allPeople = useSelector((state)=> state.dataReducer)
// console.log("all ppl in state", allPeople);
const linkNames = namesOfStudents.map((name)=>{
  return <Link to={`/student/${name}`}>{name}</Link>
})
console.log(averageRatingSubject)
const avgRatingSubject = averageRatingSubject;
// const routeNames = namesOfStudents.map((name)=>{
//   return <Route path={name} element={<Person name={name} />}/>
// })
// const params = useParams()
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
        {linkNames}
        <Routes>
        <Route path="/" element={<Home allPeople={allPeople}/>}/>
        <Route path="/barchart"/>
        <Route path="/linechart"/>
        <Route path="student/:name" element={<ViewStudent rating={avgRatingSubject}/>} />
          {/* {routeNames}   */}
        </Routes>
      </main>
<img src={logo} className="App-logo" alt="logo" />
    </Router>
  </>
  );
}

// function ViewPerson() {
//   const params = useParams();
//   console.log(params);
//   // const data=averageRatingSubject
//   const data = [
//     {quarter: 1, earnings: 13000},
//     {quarter: 2, earnings: 16500},
//     {quarter: 3, earnings: 14250},
//     {quarter: 4, earnings: 19000}
//   ];
//   return (
//   <>
//   <p>Dit is niet de data voor {params.name}</p>
//   <VictoryChart>
//   <VictoryBar
//   data={data}
//   y="quarter"
//   x="earnings"
//   />
//   </VictoryChart>
//   </>)
// }

export default App;
