import React,{Component} from "react";
import {connect} from 'react-redux'
import { Table } from 'reactstrap';
import {getThinkTanks}from '../actions/actionThinkTank'
import ThinkTankCard from "./workshop-card/ThinkTankcard";
import AddCardThinkTank from "./add-card/AddCardThinkTank";
import "./Main.css";
//import { Table } from 'material-components';


  class ThinkTank extends Component {

    componentDidMount() {
      this.props.getThinkTanks();
    }
   render (){
     const { ThinkTankList} = this.props;
    return !(ThinkTankList) ? "Loading" : (
      <div className="main-container">
        <div className="header">
{/* <header/> */}
        </div>
        <AddCardThinkTank/>
        
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
          {ThinkTankList
            .map((ThinkTank, i) => (
              <ThinkTankCard key={i} ThinkTank={ThinkTank} />
            ))}</tbody>
          
         </Table>
      </div>
    )
  }
  }



const mapStateToProps = state => {
  return {
    ThinkTankList: state.ThinkTanksReducer
  }
}
const mapDispatchToProps=dispatch => ({
  getThinkTanks :()=>{ dispatch (getThinkTanks());
  }
})


const ThinkTanksContainer = 
    connect(mapStateToProps, mapDispatchToProps)(ThinkTank)

export default ThinkTanksContainer;
