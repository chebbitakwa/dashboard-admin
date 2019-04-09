const initialState =[];
function colloquesReducer (state= initialState,action){
    if(action.type === "FETCH_COLLOQUES") {
        return action.payload
    }
    return state
}

export default colloquesReducer