import { ADD_Workshop } from "../constants/actionTypes";
import { REMOVE_Workshop } from "../constants/actionTypes";
import axios from 'axios';


export function addWorkshop(payload) {
return { type: ADD_Workshop, payload };
}


export function removeWorkshop(payload) {
    return { type: REMOVE_Workshop, payload };
    }


export function getWorkshopsSucces(payload){
        return {
            type:"FETCH_WORKSHOPS", payload
        }
    }
    export function getWorkshops(){
        return dispatch=>{
            axios.get ("/workshops")
            .then (res => res.data )
            .catch (err => alert(err))
            .then (payload=> dispatch(getWorkshopsSucces(payload)))
    }}
    export function postWorkshops(newWorkshop){
        return dispatch=>{
            axios.post ("/add-workshop", newWorkshop)
            .then (res => axios.get ("/workshops") )
            .then(res => dispatch(getWorkshops(res)))
            .catch (err => alert(err))
            
            // .then (payload => dispatch(addWorkshop(payload)))
    }}
    export function deleteWorkshops(name){
        return dispatch=>{
            axios.delete ("/removeworkshops/"+name)
            .then (res => axios.get ("/workshops") )
            .then(res => dispatch(getWorkshops(res)))
          
            
            // .catch (err => console.log(err))
            // .then (payload=> dispatch(removeWorkshop(payload)))
    }}
    // deleteContact = contactId => {
    //     axios
    //       .delete("/delete_contact/" + contactId)
    //       .then(res =>
    //         axios.get("/contacts").then(res => this.updateList(res.data))
    //       );
    //   };


