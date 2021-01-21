import React, { Component } from 'react';

class ProjectsContainer extends Component {

  state = {
    project: ''
  }

  render() {
    return (
      <div>
        ProjectInput
        <form>
          <label>Project Name:</label> {'  '}
          <input
          type="text"
          name="project_name"
        //  value={this.state.text}
          placeholder="Project Name"/><br/>
          <label>Project Description:</label>{'  '}
          <input
          type="text"
          name="project_description"
          placeholder="Project Description"
          maxLength="200"
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

export default ProjectsContainer;
