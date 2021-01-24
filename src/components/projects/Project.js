import React, { Component } from 'react';
import MaterialsContainer from '../../containers/MaterialsContainer'
class Project extends Component {


  handleOnDelete = ()=> {
    let projectId = this.props.match.params.id
    this.props.deleteProject(projectId)
    this.props.history.push('/projects')

  }

  handleOnClick = () => {
    let project = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
    this.props.updateProject(project.id, project)
  }
render() {
  //let project = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
  //const { project } = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
  //debugger
  let project = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
  return (
    <div>
      <h2 id={project ? project.id : "none"}> {project ? project.name : "There's no Project here"} </h2>
      <div class="landscape">
        <img src={project.image != null ? project.image : "https://static.vecteezy.com/system/resources/previews/000/163/317/non_2x/doodled-blue-craft-tools-vector.jpg"}/>
      </div>
      <p>Project Details: {project ? project.description : null} {' '}<br/>
      Project Cost: ${project.cost}<br/>
      Project Completed: {project.completed.toString()} <button class="update-button" onClick={this.handleOnClick}>✓</button></p>
      <button class="delete-button" onClick={this.handleOnDelete}> Delete Project </button>
      <br/>
      <br/>
      <h3 style={{fontFamily: "Verdana"}}>Materials Needed for this Project</h3>
      <MaterialsContainer project={project}/>
    </div>
    )
  }
}

export default Project;
///  <p>Project Cost: {project.cost} </p>

/*let  project = {}
  if (this.props.hasOwnProperty('match')) {
    project = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
  }
  else {
    project = this.props.project
  }*/
