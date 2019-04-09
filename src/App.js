import React, { Component } from 'react';
import Navbar from './components/Nav';
import Colloque from './components/colloques';
import ThinkTank from './components/ThinkTank';
import Main from "./components/Main";
import { BrowserRouter,Route } from "react-router-dom";
import Parcour from './components/Parcour';
import Art from './components/Art'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Route exact path='/colloques' render={()=><Colloque/>}/>
          <Route exact path='/ThinkTanks' render={()=><ThinkTank/>}/> 
          <Route exact path='/Workshop' render={()=><Main/>}/>
          <Route exact path='/Parcour' render={()=><Parcour/>}/>
          <Route exact path='/Art' render={()=><Art/>}/>

      </div>
      </BrowserRouter>

    );
  }
}

export default App;
