import StudentData from "../components/Studentdata";

export const dataReducer = (state = StudentData, action)=>{
    switch (action.type){
        // case "NO_DUPLICATE_STUDENTS":
        //     return state.map((person)=>{
        //         return {name: person.name} 
        //     });
        default:
            return state;

    }

};