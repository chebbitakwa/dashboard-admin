import {ADD_Colloque} from '../constants/actionTypesColloque'
import {REMOVE_Colloque} from '../constants/actionTypesColloque'
const initialState = [];

const AddColloqueReducer = (state = initialState, action) => {
    if(action.type === ADD_Colloque) {
        return (action.payload)
    }
    if(action.type === REMOVE_Colloque) {
        return (action.payload)
    }
    return state
}
export default AddColloqueReducer;