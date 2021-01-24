import React, { Component } from 'react';
import MaterialsContainer from '../../containers/MaterialsContainer'
import CommentsContainer from '../../containers/CommentsContainer'

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
      <h1 id={project ? project.id : "none"}> {project ? project.name : "There's no Project here"} </h1>
      <div class="landscape">
        <img src={project.image != "" ? project.image : "https://static.vecteezy.com/system/resources/previews/000/163/317/non_2x/doodled-blue-craft-tools-vector.jpg"}/>
      </div>
      <p>Project Details: {project ? project.description : null} {' '}<br/>
      Project Cost: ${project.cost}<br/>
      Project Completed: {project.completed.toString()} <button class="update-button" onClick={this.handleOnClick}>✓</button></p>
      <button class="delete-button" onClick={this.handleOnDelete}> Delete Project </button>
      <br/>
      <br/>
      <h3 style={{fontFamily: "Verdana"}}>Materials Needed for this Project</h3>
      <MaterialsContainer project={project}/>
      <CommentsContainer />
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
