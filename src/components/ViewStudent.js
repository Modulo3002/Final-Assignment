import { useParams } from "react-router-dom";
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

function ViewStudent() {
  // params toegepast om de naam uit de link te halen
  // eigen kleuren gebruikt voor de charts
  // data uit arrays gebhaald om charts te vullen
    const params = useParams();
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
      <h5>Dit zijn de gemiddelden van: {params.name}</h5>          
        
      <VictoryChart theme={wincTheme}               
          padding={{ top: 80, bottom: 300, right: 300, left: 300 }}
          animate={{duration: 1200}}
      >
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
     
      <VictoryChart theme={wincTheme}  padding={{ top: 80, bottom: 300, right: 300, left: 300 }}>
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