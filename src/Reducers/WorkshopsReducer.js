const initialState =[];
function workshopsReducer (state= initialState,action){
    if(action.type === "FETCH_WORKSHOPS") {
        return action.payload
    }
    return state
}

export default workshopsReducer