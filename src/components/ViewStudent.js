import { useParams } from "react-router-dom";
// import { VictoryChart, VictoryBar } from 'victory';
import { StudentData } from "./Studentdata";
import wincTheme from "../utils/Theme";
import {
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryAxis,
  VictoryLine,
  VictoryGroup
} from "victory";
console.log(StudentData);

function ViewStudent(props) {
    const params = useParams();
    // console.log(params.name);
    // console.log(Object.entries(props.rating))
    // const data = Object.entries(props.rating)
  
    const getDataPerStudent = StudentData.filter((person) => params.name === person.name)     
    const getNewArray = getDataPerStudent.map((person)=> [person.subject, person.difficulty, person.rating])
    const getSubjects = getDataPerStudent.map((person)=> person.subject)

    console.log(getDataPerStudent);
    console.log(getNewArray);
    console.log(getSubjects);

    const orange={
      backgroundColor: "orange"
    }
    const blue={
      backgroundColor: "blue",
      color: "white"
    }
      return (
      <>
      <h5 style={orange}>Gemiddelde "fun" score is in het oranje.</h5>
      <h5 style={blue}>Gemiddelde "moeilijkheids" score is in het blauw.</h5>
      <p>Dit zijn de gemiddelden van: {params.name}</p>          
        
      <VictoryChart theme={wincTheme}  >
        <VictoryGroup offset={10}>
          <VictoryBar
            style={{
             data:{ fill:"blue"}
             }}
            data={getNewArray}
            y={1}
            x={0}
            labelComponent={
              <VictoryLabel angle={-45} textAnchor="end"/>
               }
          />
          <VictoryBar
                      style={{
                        data:{ fill:"orange"}
                        }}
            data={getNewArray}
            y={2}
            x={0}
          />
        </VictoryGroup>
        <VictoryAxis tickLabelComponent={<VictoryLabel angle={70} textAnchor="left"/>} />
        <VictoryAxis tickValues={[0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]} dependentAxis />
      </VictoryChart>
     
      <VictoryChart theme={wincTheme}>
        <VictoryLine
          style={{
            data:{ stroke: "orange"},
            parent: { border: "black"}
          }}
          data={getNewArray}
          y={1}
          x={0}
        />
        <VictoryLine
          style={{
            data:{ stroke: "blue"},
            
          }}
          data={getNewArray}
          y={2}
          x={0}
        />
        <VictoryAxis tickLabelComponent={<VictoryLabel angle={70} textAnchor="left"/>} />
        <VictoryAxis tickValues={[0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]} dependentAxis />       
      </VictoryChart>         
     </>
      )
  }

  export default ViewStudent