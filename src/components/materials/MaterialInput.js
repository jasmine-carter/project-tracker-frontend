import React from 'react';

class MaterialInput extends React.Component {

  state = {
    name: '',
    cost: '',
    quantity: ''
  }


  render() {
    return (
      <div>
        Add Material to Your Project
        <form>
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
          onChange={this.handleOnChange}/><br/>
        <label>Quantity Needed</label> {' '}
        <input
          type="text"
          name="quantity"
          value={this.state.quantity}
          placeholder="Quantity Needed"
          onChange={this.handleOnChange} /><br/>
        <input
          type="submit"
          value="Create Project Material" />
        </form>
      </div>
    )
  }
}

export default MaterialInput;
