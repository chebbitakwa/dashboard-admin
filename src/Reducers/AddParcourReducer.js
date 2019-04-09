import {ADD_Parcour} from '../constants/actionTypesParcour'
import {REMOVE_Parcour} from '../constants/actionTypesParcour'
const initialState = [];

const AddParcourReducer = (state = initialState, action) => {
    if(action.type === ADD_Parcour) {
        return (action.payload)
    }
    if(action.type === REMOVE_Parcour) {
        return (action.payload)
    }
    return state
}
export default AddParcourReducer;