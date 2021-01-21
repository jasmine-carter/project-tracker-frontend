import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addProject} from '../actions/addProject'
class ProjectInput extends Component {

  state = {
    name: '',
    description: ''
  }

  handleOnChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();


  }


  render() {
    return (
      <div>
        ProjectInput
        <form onSubmit={(event) =>this.handleSubmit(event)}>
          <label>Project Name:</label> {'  '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Project Name"
            onChange={this.handleOnChange}/><br/>
          <label>Project Description:</label>{'  '}
          <input
            type="text"
            value={this.state.description}
            name="description"
            placeholder="Project Description"
            maxLength="200"
            onChange={this.handleOnChange}
          />
          <br/>
          <br/>
          <input
            type="submit"
            value="Create Project"/>
        </form>
      </div>
    )
  }

}

export default connect(null, {addProject})(ProjectInput);
