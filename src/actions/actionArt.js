import { ADD_Art } from "../constants/actionTypesArt";
import { REMOVE_Art } from "../constants/actionTypesArt";
import axios from 'axios';


export function addArt(payload) {
return { type: ADD_Art, payload };
}


export function removeArt(payload) {
    return { type: REMOVE_Art, payload };
    }


export function getArtsSucces(payload){
        return {
            type:"FETCH_ARTS", payload
        }
    }
    export function getArts(){
        return dispatch=>{
            axios.get("/arts")
            .then (res => res.data )
            .catch (err => alert(err))
            .then (payload=> dispatch(getArtsSucces(payload)))
    }}
    export function postArts(newArt){
        return dispatch=>{
            axios.post ("/add-art", newArt)
            .then (res => axios.get ("/arts") )
            .then(res => dispatch(getArts(res)))
            .catch (err => alert(err))
            
            
    }}
    export function deleteArts(name){
        return dispatch=>{
            axios.delete ("/removearts/"+name)
            .then (res => axios.get ("/arts") )
            .then(res => dispatch(getArts(res)))

    }}



