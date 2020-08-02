const initState = {
   Patients: [
        {
            Name:"Ahmed",
            Gender:"Male",
            Age:28,
            _id:0
        },{
            Name:"Sarah",
            Gender:"Female",
            Age:22,
            _id:1
        },{
            Name:"Kamal",
            Gender:"Male",
            Age:31,
            _id:2
        }
      ]
}

const rootReducer = (state = initState,action)=>{
    if(action.type === 'ADD_Patient'){
        let newPatients = [...this.state.Patients];
        newPatients.push(action.newPatient);
        return{
            Patients: newPatients
        }
    }
    else if(action.type === 'EDIT_Patient'){
        const patientId = this.state.Patients.findIndex(patient => patient._id == action.action._id );
        let newPatients = [...this.state.Patients];
        newPatients[patientId]=action.patient;
        return{
            Patients: newPatients
        }
    }
    else if(action.type === 'DELETE_Patient'){
        let newPatients = state.Patients.filter(Patients => {
            return Patients._id !== action._id
        });
        return {
            Patients: newPatients
        }
    }
    return state;
 }
 
 export default rootReducer