<VictoryChart domainPadding={15} theme={wincTheme}>
<VictoryGroup offset={50}>
  <VictoryBar
    labelComponent={<VictoryTooltip />}
    data={getNewArray}
    x={0}
    y={1}
  //   tickValues={[1,2,3,4,5]}
    // tickFormat={getNewArray.forEach[0]}
    // tickFormat={getSubjects.map(x=>x)}
  />
  <VictoryBar
    labelComponent={<VictoryTooltip />}
    data={getNewArray}
    x={0}
    y={2}
  //   tickValues={[1, 2, 3, 4, 5]}
  //   tickFormat={assignmentRatingAverageWithLabels.map(
  //     avg => avg.assignment
  //   )}
  />
</VictoryGroup>
{/* <VictoryAxis
  // tickValues specifies both the number of ticks and where
  // they are placed on the axis
  tickValues={[1, 2, 3, 4, 5]}
  // tickFormat={(t)=> getSubjects.forEach(t=>t)}
  // tickFormat={assignmentRatingAverageWithLabels.map(
  //   avg => avg.assignment
  // )}
/> */}
{/* <VictoryAxis dependentAxis /> */}
</VictoryChart>