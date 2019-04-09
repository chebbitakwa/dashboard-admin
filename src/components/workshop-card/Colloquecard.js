import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteColloques} from '../../actions/actionColloque'

import './Workshopcard.css'



class ColloqueCard extends Component {

  render() {
    return (
      <tr >

        <td><img className='' src={this.props.colloque.img} alt=''></img></td>
           <td><p>{this.props.colloque.name}</p> </td>
           <td><p>{this.props.colloque.day}</p> </td>
           <td><p>{this.props.colloque.heur}</p></td>
           <td><p>{this.props.colloque.type}</p></td>
           <button style={{color : "red"}} onClick={() => {this.props.deleteColloques(this.props.colloque.name)}}>Delete</button>
      </tr>                     
    )
  }
}
 const mapDispatchToProps = dispatch => {
   return {
    deleteColloques: (nom) => {dispatch(deleteColloques(nom))
       }
   }
 }

  const ColloqueCardContainer = 
      connect(null, mapDispatchToProps)(ColloqueCard)

  export default ColloqueCardContainer


