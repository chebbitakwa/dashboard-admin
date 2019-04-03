import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from"redux-thunk"

import AddWorkshopReducer from '../Reducers/AddWorkshopReducer';
import workshopsReducer from '../Reducers/WorkshopsReducer';
const middleware =[thunk]

const store = createStore(combineReducers({

    AddWorkshopReducer,
    workshopsReducer
   

}), 
compose (applyMiddleware(...middleware),
 

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


export default store;