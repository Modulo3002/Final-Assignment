import * as csv from 'csvtojson';

// console.log('csvtojson', csv);

const StudentData = await fetch('/Studenten-Mock-data.csv')
  .then(resp => resp.text())
  .then(text => csv().fromString(text))
  .then((jsonObj)=>{
    return jsonObj.map(o => {return {...o, difficulty: Number(o.difficulty), rating: Number(o.rating)}})
})

    //gemiddelden per vak

    const getAverageScoreSubject =(array)=>{
      const countSubjects={};
      const countDifficulty={};
      array.forEach((person) => {
          countSubjects[person.subject] = (countSubjects[person.subject]||0) + 1
          countDifficulty[person.subject] = (countDifficulty[person.subject]||0) + person.difficulty
      });
      // console.log(countSubjects)
      // console.log(countDifficulty)
      
     
      const averagePerSubject={};
      for (const subject in countDifficulty) {
          const average = countDifficulty[subject]/countSubjects[subject]
          // console.log(average)    
          averagePerSubject[subject] = average;
     }
     console.log(averagePerSubject)
     return averagePerSubject
  }

  const averageScoreSubject = getAverageScoreSubject(StudentData)

  const getAverageRating =(array)=>{
      const countSubjects={};
      const countRating={};
      array.forEach((person) => {
          countSubjects[person.subject] = (countSubjects[person.subject]||0) + 1
          countRating[person.subject] = (countRating[person.subject]||0) + person.rating
      });
      // console.log(countSubjects)
      // console.log(countRating)
             
      const averagePerSubject={};
      for (const subject in countRating) {
          const average = countRating[subject]/countSubjects[subject]
          // console.log(average)    
          averagePerSubject[subject] = average;
     }
     console.log(averagePerSubject)
     return averagePerSubject
  }

  const averageRatingSubject = getAverageRating(StudentData)
  
export { StudentData, averageScoreSubject, averageRatingSubject }