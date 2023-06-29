import React from "react";
import { StudentData, averageRatingSubject, averageScoreSubject } from "./Studentdata";
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
    const orange={
        backgroundColor: "orange"
      }
      const blue={
        backgroundColor: "blue",
        color: "white"
      }



return(
    <>
<div>Home!</div>
      {/* <p>Dit zijn de gemiddelden van alle studenten</p>
      <h5 style={orange}>Gemiddelde "fun" score is in het oranje.</h5>
      <h5 style={blue}>Gemiddelde "moeilijkheids" score is in het blauw.</h5>
          
        
      <VictoryChart theme={wincTheme}  >
        <VictoryGroup offset={10}>
          <VictoryBar
            style={{
             data:{ fill: "orange"}
             }}
            data={}
            y={1}
            x={0}
            labelComponent={
              <VictoryLabel angle={-45} textAnchor="end"/>
               }
          />
          <VictoryBar
            data={}
            y={2}
            x={0}
          />
        </VictoryGroup>
        <VictoryAxis tickLabelComponent={<VictoryLabel angle={70} textAnchor="left"/>} />
        <VictoryAxis tickValues={[0.5,1,1.5,2,2.5,3,3.5,4,4.5,5]} dependentAxis />
      </VictoryChart> */}
      </>
      )};

export default Home;
