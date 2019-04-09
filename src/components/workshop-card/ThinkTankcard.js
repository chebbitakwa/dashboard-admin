import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteThinkTanks} from '../../actions/actionThinkTank'

import './Workshopcard.css'



class ThinkTankCard extends Component {

  render() {
    return (
      <tr >

        <td><img className='' src={this.props.ThinkTank.img} alt=''></img></td>
           <td><p>{this.props.ThinkTank.name}</p> </td>
           <td><p>{this.props.ThinkTank.day}</p> </td>
           <td><p>{this.props.ThinkTank.heur}</p></td>
           <td><p>{this.props.ThinkTank.type}</p></td>
           <button style={{color : "red"}} onClick={() => {this.props.deleteThinkTanks(this.props.ThinkTank.name)}}>Delete</button>
      </tr>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteThinkTanks: (nom) => {dispatch(deleteThinkTanks(nom))
      }
  }
}

 const ThinkTankCardContainer = 
     connect(null, mapDispatchToProps)(ThinkTankCard)

 export default ThinkTankCardContainer


