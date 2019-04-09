import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteParcours} from '../../actions/actionParcours'

import './Workshopcard.css'



class ParcourCard extends Component {

  render() {
    return (
      <tr >

        <td><img className='' src={this.props.parcour.img} alt=''></img></td>
           <td><p>{this.props.parcour.name}</p> </td>
           <td><p>{this.props.parcour.day}</p> </td>
           <td><p>{this.props.parcour.heur}</p></td>
           <td><p>{this.props.parcour.type}</p></td>
           <button style={{color : "red"}} onClick={() => {this.props.deleteParcours(this.props.parcour.name)}}>Delete</button>
      </tr>                     
    )
  }
}
 const mapDispatchToProps = dispatch => {
   return {
    deleteParcours: (nom) => {dispatch(deleteParcours(nom))
       }
   }
 }

  const ParcourCardContainer = 
      connect(null, mapDispatchToProps)(ParcourCard)

  export default ParcourCardContainer


