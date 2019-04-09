import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from"redux-thunk"

import AddWorkshopReducer from '../Reducers/AddWorkshopReducer';
import workshopsReducer from '../Reducers/WorkshopsReducer';
import AddColloqueReducer from '../Reducers/AddColloqueReducer';
import colloquesReducer from '../Reducers/ColloquesReducer';
import ThinkTanksReducer from '../Reducers/ThinkTankReducer';
import AddThinkTankReducer from '../Reducers/AddThikTankReducer';
import AddParcourReducer from '../Reducers/AddParcourReducer';
import parcoursReducer from '../Reducers/ParcoursReducer';
import artsReducer from '../Reducers/ArtsReducer';
import AddArtReducer from '../Reducers/AddArtReducer';


const middleware =[thunk]

const store = createStore(combineReducers({

    AddWorkshopReducer,
    workshopsReducer,
    AddColloqueReducer,
    colloquesReducer,
    ThinkTanksReducer,
    AddThinkTankReducer,
    parcoursReducer,
    AddParcourReducer ,
    artsReducer,
    AddArtReducer 

   

}), 
compose (applyMiddleware(...middleware),
 

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


export default store;