import React,{Component} from "react";
import {connect} from 'react-redux'
import { Table } from 'reactstrap';
import {getParcours}from '../actions/actionParcours'


import ParcourCard from "./workshop-card/Parcourcard";
import AddCardParcour from "./add-card/AddCardParcour";
import "./Main.css";
//import { Table } from 'material-components';


  class Parcour extends Component {

    componentDidMount() {
      this.props.getParcours();
    }
   render (){
     const { parcourList} = this.props;
    return !(parcourList) ? "Loading" : (
      <div className="main-container">
        <div className="header">
{/* <header/> */}
        </div>
        <AddCardParcour />
        
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
          {parcourList
            .map((parcour, i) => (
              <ParcourCard key={i} parcour={parcour} />
            ))}</tbody>
          
         </Table>
      </div>
    )
  }
  }



const mapStateToProps = state => {
  return {
    parcourList: state.parcoursReducer
  }
}
const mapDispatchToProps=dispatch => ({
  getParcours :()=>{ dispatch (getParcours());
  }
})


const ParcourContainer = 
    connect(mapStateToProps, mapDispatchToProps)(Parcour)

export default ParcourContainer;
