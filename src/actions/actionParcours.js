import { ADD_Parcour } from "../constants/actionTypesParcour.js";
import { REMOVE_Parcour } from "../constants/actionTypesParcour.js";
import axios from 'axios';


export function addParcour(payload) {
return { type: ADD_Parcour, payload };
}


export function removeParcour(payload) {
    return { type: REMOVE_Parcour, payload };
    }


export function getParcoursSucces(payload){
        return {
            type:"FETCH_PARCOURS", payload
        }
    }
    export function getParcours(){
        return dispatch=>{
            axios.get ("/parcours")
            .then (res => res.data )
            .catch (err => alert(err))
            .then (payload=> dispatch(getParcoursSucces(payload)))
    }}
    export function postParcours(newParcour){
        return dispatch=>{
            axios.post ("/add-parcour", newParcour)
            .then (res => axios.get ("/parcours") )
            .then(res => dispatch(getParcours(res)))
            .catch (err => alert(err))
            
            // .then (payload => dispatch(addWorkshop(payload)))
    }}
    export function deleteParcours(name){
        return dispatch=>{
            axios.delete ("/removeparcours/"+name)
            .then (res => axios.get ("/parcours") )
            .then(res => dispatch(getParcours(res)))
          
            
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


