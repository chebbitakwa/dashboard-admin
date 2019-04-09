const initialState =[];
function parcoursReducer (state= initialState,action){
    if(action.type === "FETCH_PARCOURS") {
        return action.payload
    }
    return state
}

export default parcoursReducer