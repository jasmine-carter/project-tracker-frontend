import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import MaterialsContainer from '../../containers/MaterialsContainer'

class Project extends Component {


  handleOnClick = ()=> {
    let projectId = this.props.match.params.id
  this.props.deleteProject(projectId)
  }

render() {
  //let project = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
  //const { project } = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
  //debugger
  console.log(this.props)
  let project = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]

  return (
    <div>
      <h3 id={project ? project.id : "none"}> {project ? project.name : "There's no Project here"} </h3>
      <p>{project ? project.description : null} {' '}</p>
      <p>Project Cost: $ </p>

      <button onClick={this.handleOnClick}> Delete Project? </button>
      <MaterialsContainer project={project}/>
    </div>
    )
  }
}

export default Project;

/*let  project = {}
  if (this.props.hasOwnProperty('match')) {
    project = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
  }
  else {
    project = this.props.project
  }*/
