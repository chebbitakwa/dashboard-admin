import React, { Component } from 'react'
import {connect} from 'react-redux'
import {postParcours} from '../../actions/actionParcours'
import {Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AddCard.css'

export class AddCardParcour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }


  handleInput =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
}

toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
}


  render() {
    return (
      <div className='add-container'>
        <Button color="primary" onClick={this.toggle}>ADD<i className="fas fa-plus"></i></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a new Workshop</ModalHeader>
          <ModalBody>
            <Label className='label-form' for="image-src"> Image source:</Label>
            <Input name="img" onChange={this.handleInput}className='input-form' plaintext placeholder='workshop src' />

            <Label for="image-name">Nom:</Label>
            <Input name="name" onChange={this.handleInput} className='input-form' plaintext placeholder='workshop name' />

            <Label for="image-description">Day:</Label>
            <Input name="day" onChange={this.handleInput} className='input-form' plaintext placeholder='workshop day' />

            <Label for="workshop-heure">Heure:</Label>
            <Input name="heur" onChange={this.handleInput} className='input-form' plaintext placeholder='workshop heure' />
            <Label for="workshop-type">Type:</Label>
            <Input name="type" onChange={this.handleInput} className='input-form' plaintext placeholder='workshop type' />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {this.props.postParcours(this.state); this.toggle()}}>Add</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postParcours: (newParcour) => {dispatch(postParcours(newParcour))
      }
  }
}

const AddCardParcourContainer = 
    connect(null, mapDispatchToProps)(AddCardParcour)

export default  AddCardParcourContainer