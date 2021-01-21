import React, { Component } from 'react';


class Project extends Component {


  handleOnClick = () => {
    this.props.deleteProject(this.props.project.id)
  }
render() {
  const { project } = this.props;

  return (
    <div>
      <li >
      {project.name} - {project.description}
      <button> X </button>
      </li>
    </div>
    )
  }
}

export default Project;
