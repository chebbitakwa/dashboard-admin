const initialState =[];
function artsReducer (state= initialState,action){
    if(action.type === "FETCH_ARTS") {
        return action.payload
    }
    return state
}

export default artsReducer