import {ADD_Workshop} from '../constants/actionTypes'
import {REMOVE_Workshop} from '../constants/actionTypes'
const initialState = [];

const AddWorkshopReducer = (state = initialState, action) => {
    if(action.type === ADD_Workshop) {
        return (action.payload)
    }
    if(action.type === REMOVE_Workshop) {
        return (action.payload)
    }
    return state
}


// if(action.type===REMOVE_Workshop){
       
//     return state.filter(i=>{
//         if(i.id===action.id){
//             return false
//         }
//         return state
//     })
// }

export default AddWorkshopReducer;
