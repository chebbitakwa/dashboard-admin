import React,{Component} from "react";
import {connect} from 'react-redux'
import { Table } from 'reactstrap';
import {getColloques}from '../actions/actionColloque'


import ColloqueCard from "./workshop-card/Colloquecard";
import AddCardColloque from "./add-card/AddCardColloque";
import "./Main.css";
//import { Table } from 'material-components';


  class Colloque extends Component {

    componentDidMount() {
      this.props.getColloques();
    }
   render (){
     const { colloqueList} = this.props;
    return !(colloqueList) ? "Loading" : (
      <div className="main-container">
        <div className="header">
{/* <header/> */}
        </div>
        <AddCardColloque/>
        
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
          {colloqueList
            .map((colloque, i) => (
              <ColloqueCard key={i} colloque={colloque} />
            ))}</tbody>
          
         </Table>
      </div>
    )
  }
  }



const mapStateToProps = state => {
  return {
    colloqueList: state.colloquesReducer
  }
}
const mapDispatchToProps=dispatch => ({
  getColloques :()=>{ dispatch (getColloques());
  }
})


const ColloquesContainer = 
    connect(mapStateToProps, mapDispatchToProps)(Colloque)

export default ColloquesContainer;
