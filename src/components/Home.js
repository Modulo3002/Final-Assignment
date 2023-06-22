import React from "react";

function Home(props) {
    // console.log(props.allPeople)
    //alle namen in een array
    let allNames = props.allPeople.map((person)=>{return person.name})
    let namesOnce = [...new Set (allNames)]
    
    // console.log(allNames);
    // console.log(namesOnce);

    //alle subjects in een array
    let allSubjects = props.allPeople.map((person)=>{return person.subject});
    let subjectsOnce = [...new Set (allSubjects)];
    
    // console.log(subjectsOnce);



return(
<div>Home!</div>)};

export default Home;
