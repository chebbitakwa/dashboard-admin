import {ADD_ThinkTank} from '../constants/actionTypesThinkTank'
import {REMOVE_ThinkTank} from '../constants/actionTypesThinkTank'
const initialState = [];

const AddThinkTankReducer= (state = initialState, action) => {
    if(action.type === ADD_ThinkTank) {
        return (action.payload)
    }
    if(action.type === REMOVE_ThinkTank) {
        return (action.payload)
    }
    return state
}
export default AddThinkTankReducer;