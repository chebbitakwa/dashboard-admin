import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteArts} from '../../actions/actionArt'

import './Workshopcard.css'



class ArtCard extends Component {

  render() {
    return (
      <tr >

        <td><img className='' src={this.props.art.img} alt=''></img></td>
           <td><p>{this.props.art.name}</p> </td>
           <td><p>{this.props.art.day}</p> </td>
           <td><p>{this.props.art.heur}</p></td>
           <td><p>{this.props.art.type}</p></td>
           <button style={{color : "red"}} onClick={() => {this.props.deleteArts(this.props.art.name)}}>Delete</button>
      </tr>                     
    )
  }
}
 const mapDispatchToProps = dispatch => {
   return {
    deleteArts: (nom) => {dispatch(deleteArts(nom))
       }
   }
 }

  const ArtCardContainer = 
      connect(null, mapDispatchToProps)(ArtCard)

  export default ArtCardContainer


