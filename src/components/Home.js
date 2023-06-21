import React from "react";

function Home(props) {
    console.log(props.allPeople)
    //alle namen in een array
    let allNames = props.allPeople.map((person)=>{return person.name})
    let namesOnce = [...new Set (allNames)]
    
    console.log(allNames);
    console.log(namesOnce);

    //alle subjects in een array
    let allSubjects = props.allPeople.map((person)=>{return person.subject});
    let subjectsOnce = [...new Set (allSubjects)];
    
    console.log(subjectsOnce);

    //gemiddelden per vak

    const getAverageScoreSubject =(array)=>{
        const countSubjects={};
        const countDifficulty={};
        array.forEach((person) => {
            countSubjects[person.subject] = (countSubjects[person.subject]||0) + 1
            countDifficulty[person.subject] = (countDifficulty[person.subject]||0) + person.difficulty
        });
        console.log(countSubjects)
        console.log(countDifficulty)
        // console.log(countDifficulty/countSubjects)
       
        const averagePerSubject={};
        for (const subject in countDifficulty) {
            const average = countDifficulty[subject]/countSubjects[subject]
            // console.log(average)    
            averagePerSubject[subject] = average;
       }
       console.log(averagePerSubject)
       return averagePerSubject
    }

    getAverageScoreSubject(props.allPeople)

return(
<div>Home!</div>)};

export default Home;
