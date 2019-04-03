import React,{Component} from "react";
import {connect} from 'react-redux'
import { Table } from 'reactstrap';
import {getWorkshops}from '../actions/action'


import WorkshopCard from "./workshop-card/Workshopcard";
import AddCard from "./add-card/AddCard";
import "./Main.css";
//import { Table } from 'material-components';


  class Main extends Component {

    componentDidMount() {
      this.props.getWorkshops();
    }
   render (){
     const { workshopList} = this.props;
    return !(workshopList) ? "Loading" : (
      <div className="main-container">
        <div className="header">
{/* <header/> */}
        </div>
        <AddCard />
        
        <Table  striped bordered> 
        <thead>
          <tr>
            <th>image</th>
            <th>nom</th>
            <th>jour</th>
            <th>heure</th>
            <th>type</th>
            <th>action</th>

          </tr>
        </thead>
        <tbody>
          {workshopList
            .map((workshop, i) => (
              <WorkshopCard key={i} workshop={workshop} />
            ))}</tbody>
          
         </Table>
      </div>
    )
  }
  }



const mapStateToProps = state => {
  return {
    workshopList: state.workshopsReducer
  }
}
const mapDispatchToProps=dispatch => ({
  getWorkshops :()=>{ dispatch (getWorkshops());
  }
})


const MainContainer = 
    connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer;
