import React from 'react';
import {addMaterial} from '../../actions/addMaterial'
import {connect} from 'react-redux'

class MaterialInput extends React.Component {

  state = {
    name: '',
    cost: '',
    quantity: ''
  }

handleOnChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state)
  this.props.addMaterial(this.state, this.props.project.id)
  this.setState({
    name: '',
    cost: '',
    quantity: ''
  })

}

  render() {
    return (
      <div>
        Add Material to Your Project
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Material Name </label>{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Material Name"
            onChange={this.handleOnChange}/><br/>
          <label>Cost of Material</label>{' '}
          <input
            type="text"
            name="cost"
            value={this.state.cost}
            placeholder="Material Cost"
            pattern="[0-9]"
            title="Use only numbers"
            onChange={this.handleOnChange}/><br/>
          <label>Quantity Needed</label> {' '}
          <input
            type="text"
            name="quantity"
            value={this.state.quantity}
            placeholder="Quantity Needed"
            pattern="[0-9]"
            title="Use only numbers"
            onChange={this.handleOnChange} /><br/>
          <input
            type="submit"
            value="Create Project Material" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addMaterial})(MaterialInput);
