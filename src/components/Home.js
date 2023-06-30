import React from "react";
import { StudentData, averageRatingSubject, averageScoreSubject, subjects } from "./Studentdata";
import wincTheme from "../utils/Theme";
import {
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryAxis,
  VictoryLine,
  VictoryGroup
} from "victory";

function Home() {
    console.log(averageRatingSubject);
    console.log(averageScoreSubject) 
    // console.log(Object.entries(averageRatingSubject))   
    const averageRating = Object.entries(averageRatingSubject);
    const averageScore = Object.entries(averageScoreSubject);

    const blue={
        backgroundColor: "blue",
        color: "white"
      }
      const orange={
        backgroundColor: "orange",
        color: "white"
      }



return(
    <>
      <h5>Dit zijn de gemiddelden van alle studenten</h5>
      <h5 style={blue}>Gemiddelde "fun" score is aangegeven in de kleur blauw.</h5>
      <h5 style={orange}>Gemiddelde "moeilijkheids" score is in het oranje.</h5>
          
        
      <VictoryChart theme={wincTheme}  >
        <VictoryGroup offset={10}>
          <VictoryBar
            style={{
             data:{ fill: "blue"}
             }}
            data={averageRating}
            y={1}
            x={0}
            labelComponent={
              <VictoryLabel angle={-45} textAnchor="end"/>
               }
          />
          <VictoryBar
               style={{
                data:{ fill: "orange"}
                }}
            data={averageScore}
            y={1}
            x={0}
          />
        </VictoryGroup>
        <VictoryAxis tickLabelComponent={<VictoryLabel angle={70} textAnchor="left"/>} />
        <VictoryAxis tickValues={[0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]} dependentAxis />
      </VictoryChart>
      </>
      )};

export default Home;
