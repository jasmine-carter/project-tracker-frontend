import React, { Component } from 'react';

class Project extends Component {


  handleOnClick = () => {
    this.props.deleteProject(this.props.project.id)
  }

render() {
  //let project = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
  //const { project } = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]

  let  { project } = {}
  if (this.props.hasOwnProperty('match')) {
    project = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
  }
  else {
    project = this.props
  }


  console.log(this.props.hasOwnProperty('match'))
  return (
    <div>
      <li >
      {project ? project.name : null} - {project ? project.description : null} {' '}
      <button onClick={this.handleOnClick}> X </button>
      </li>
    </div>
    )
  }
}

export default Project;
//{project ? project.name : null} - {project ? project.description : null} {' '}
