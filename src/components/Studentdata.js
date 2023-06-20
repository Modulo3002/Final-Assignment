import * as csv from 'csvtojson';

// console.log('csvtojson', csv);

const StudentData = await fetch('/Studenten-Mock-data.csv')
  .then(resp => resp.text())
  .then(text => csv().fromString(text))
  .then((jsonObj)=>{
    return jsonObj
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})

export default StudentData