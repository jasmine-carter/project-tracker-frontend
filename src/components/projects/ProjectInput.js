import React, { Component } from 'react'
import {addProject} from '../../actions/addProject'
import {connect} from 'react-redux'

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
    this.props.addProject(this.state)
    this.setState({
      name: '',
      description: ''
    })
  }


  render() {
    return (
      <div>
        <h3>Create a New Project</h3>
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
            maxLength="130"
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
