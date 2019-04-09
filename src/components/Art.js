import React,{Component} from "react";
import {connect} from 'react-redux'
import { Table } from 'reactstrap';
import {getArts}from '../actions/actionArt'


import ArtCard from "./workshop-card/Artcard";
import AddCardArt from "./add-card/AddCardArt";
import "./Main.css";
//import { Table } from 'material-components';


  class Art extends Component {

    componentDidMount() {
      this.props.getArts();
    }
   render (){
     const { artList} = this.props;
    return !(artList) ? "Loading" : (
      <div className="main-container">
        <div className="header">
{/* <header/> */}
        </div>
        <AddCardArt />
        
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
          {artList
            .map((art, i) => (
              <ArtCard key={i} art={art} />
            ))}</tbody>
          
         </Table>
      </div>
    )
  }
  }



const mapStateToProps = state => {
  return {
    artList: state.artsReducer
  }
}
const mapDispatchToProps=dispatch => ({
  getArts :()=>{ dispatch (getArts());
  }
})


const ArtContainer = 
    connect(mapStateToProps, mapDispatchToProps)(Art)

export default ArtContainer;
