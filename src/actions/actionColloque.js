import { ADD_Colloque } from "../constants/actionTypesColloque";
import { REMOVE_Colloque } from "../constants/actionTypesColloque";
import axios from 'axios';


export function addColloque(payload) {
return { type: ADD_Colloque, payload };
}


export function removeColloque(payload) {
    return { type: REMOVE_Colloque, payload };
    }


export function getColloquesSucces(payload){
        return {
            type:"FETCH_COLLOQUES", payload
        }
    }
    export function getColloques(){
        return dispatch=>{
            axios.get("/colloques")
            .then (res => res.data )
            .catch (err => alert(err))
            .then (payload=> dispatch(getColloquesSucces(payload)))
    }}
    export function postColloques(newColloque){
        return dispatch=>{
            axios.post ("/add-colloque", newColloque)
            .then (res => axios.get ("/colloques") )
            .then(res => dispatch(getColloques(res)))
            .catch (err => alert(err))
            
            
    }}
    export function deleteColloques(name){
        return dispatch=>{
            axios.delete ("/removecolloques/"+name)
            .then (res => axios.get ("/colloques") )
            .then(res => dispatch(getColloques(res)))

    }}



