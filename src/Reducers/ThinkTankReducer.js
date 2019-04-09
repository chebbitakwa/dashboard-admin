const initialState =[];
function ThinkTanksReducer (state= initialState,action){
    if(action.type === "FETCH_THINKTANKS") {
        return action.payload
    }
    return state
}

export default ThinkTanksReducer