import { ADD_ThinkTank } from "../constants/actionTypesThinkTank";
import { REMOVE_ThinkTank } from "../constants/actionTypesThinkTank";
import axios from 'axios';


export function addThinkTank(payload) {
return { type: ADD_ThinkTank, payload };
}


export function removeThinkTank(payload) {
    return { type: REMOVE_ThinkTank, payload };
    }


export function getThinkTanksSucces(payload){
        return {
            type:"FETCH_THINKTANKS", payload
        }
    }
    export function getThinkTanks(){
        return dispatch=>{
            axios.get ("/ThinkTanks")
            .then (res => res.data )
            .catch (err => alert(err))
            .then (payload=> dispatch(getThinkTanksSucces(payload)))
    }}
    export function postThinkTanks(newThinkTank){
        return dispatch=>{
            axios.post ("/add-ThinkTank", newThinkTank)
            .then (res => axios.get ("/ThinkTanks") )
            .then(res => dispatch(getThinkTanks(res)))
            .catch (err => alert(err))
            
            
    }}
    export function deleteThinkTanks(name){
        return dispatch=>{
            axios.delete ("/removeThinkTanks/"+name)
            .then (res => axios.get ("/ThinkTanks") )
            .then(res => dispatch(getThinkTanks(res)))

    }}



