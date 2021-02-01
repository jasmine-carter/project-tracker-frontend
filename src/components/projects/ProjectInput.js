import React, { Component } from 'react'
import {addProject} from '../../actions/addProject'
import {connect} from 'react-redux'

class ProjectInput extends Component {

  state = {
    name: '',
    description: '',
    image: ''
  }

  handleOnChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  //  let newProject = this.props.history.length
    //console.log(this.props.history.push(`/projects/{newProject}`))
    this.props.addProject(this.state, this.props.history)
    this.setState({
      name: '',
      description: '',
      image: ''
    })
    this.props.history.push('/projects') //load newly created project page instead/
  }


  render() {
    return (
      <div>
        <h3>Create a New Project</h3>
        <p>Have an awesome project idea and you need to track what to buy? Or maybe you really want to know just how much this quilt has cost you so far to make. Start tracking that by creating a project here!</p>
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
          /><br/>
          <label>Inspiration Photo</label>
          <input
            typ="text"
            name="image"
            placeholder="Inspiration Picture"
            value={this.state.image}
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
