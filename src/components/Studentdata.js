import * as csv from 'csvtojson';

// console.log('csvtojson', csv);

const StudentData = await fetch('/Studenten-Mock-data.csv')
  .then(resp => resp.text())
  .then(text => csv().fromString(text))
  .then((jsonObj)=>{
    return jsonObj.map(o => {return {...o, difficulty: Number(o.difficulty), rating: Number(o.rating)}})
})

export default StudentData