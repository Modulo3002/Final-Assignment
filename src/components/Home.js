import React from "react";

function Home(props) {
    console.log(props.names)
    let allNames = props.names.map((person)=>{return person.name})

    // let allNames = props.names.map((person)=>{return [...new Set(person.name)]})
    let namesOnce = [...new Set (allNames)]
    console.log(allNames);
    console.log(namesOnce);
//let lala = props.names.map((person)=>{return person.name})
return(
<div>Home!</div>)};

export default Home;
