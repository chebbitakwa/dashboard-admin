import {ADD_Art} from '../constants/actionTypesArt'
import {REMOVE_Art} from '../constants/actionTypesArt'
const initialState = [];

const AddArtReducer = (state = initialState, action) => {
    if(action.type === ADD_Art) {
        return (action.payload)
    }
    if(action.type === REMOVE_Art) {
        return (action.payload)
    }
    return state
}
export default AddArtReducer;