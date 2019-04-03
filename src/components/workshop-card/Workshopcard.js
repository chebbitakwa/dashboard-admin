import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteWorkshops} from '../../actions/action'

import './Workshopcard.css'



class WorkshopCard extends Component {

  render() {
    return (
      <tr >

        <td><img className='' src={this.props.workshop.img} alt=''></img></td>
           <td><p>{this.props.workshop.name}</p> </td>
           <td><p>{this.props.workshop.day}</p> </td>
           <td><p>{this.props.workshop.heur}</p></td>
           <td><p>{this.props.workshop.type}</p></td>
           <button style={{color : "red"}} onClick={() => {this.props.deleteWorkshops(this.props.workshop.name)}}>Delete</button>
      </tr>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteWorkshops: (nom) => {dispatch(deleteWorkshops(nom))
      }
  }
}

 const WorkshopCardContainer = 
     connect(null, mapDispatchToProps)(WorkshopCard)

 export default WorkshopCardContainer


