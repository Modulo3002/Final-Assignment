import { useParams } from "react-router-dom";
import { VictoryChart, VictoryBar } from 'victory';
import { StudentData } from "./Studentdata";

console.log(StudentData);

function ViewStudent(props) {
    const params = useParams();
    // console.log(params.name);
    // console.log(Object.entries(props.rating))
    const data = Object.entries(props.rating)
  
  //   const getDataPerStudent =(array)=>{ 
  // //eerst filteren, dan mappen, .map geeft altijd een nieuwe array terug.
  //   return array.map((person) => {
  //       if( params.name === person.name){
  //         console.log([person.subject, person.rating, person.difficulty])
  //         return [person.subject, person.rating, person.difficulty];

  //       }
  //     })
    
  //   }
  //   console.log(getDataPerStudent(StudentData))
    
    const isInArray = function(person){
      if(params.name === person.name){
        
        return console.log([person.subject, person.rating, person.difficulty]);
      }
    }
    const getDataPerStudent = (array)=>{
      array.filter(isInArray)
    }

    const getNewArrayWithResult = (array)=>{
      array.map((item)=>{ return console.log(item)})
    }
      
    getDataPerStudent(StudentData);
    getNewArrayWithResult(getDataPerStudent);
    

    return (
      <>
      <p>Dit is niet de data voor {params.name}</p>
      <VictoryChart>
      <VictoryBar
      data={data}
      y={1}
      x={0}
      />
      </VictoryChart>
      </>)
  }

  export default ViewStudent