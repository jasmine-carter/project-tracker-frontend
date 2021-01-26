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

  //if props.projects.length > 0 then project= props.projects.filter
  let project = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
  //debugger;
      console.log(`Project mounted ${this.props}`)
      console.log(this.props.match.params.id[0])

  function imageRender() {
    console.log(project.image == "")
  	if (project != undefined) {
  		if (project.image != "") {
  			return (<img src={project.image}/>)
  		}else{
  			return(<img src="https://static.vecteezy.com/system/resources/previews/000/163/317/non_2x/doodled-blue-craft-tools-vector.jpg"/>)
  		}
  	}
  }


  return (
    <div>
      <h1 id={project ? project.id : "none"}> {project ? project.name : "There's no Project here"} </h1>
      <div class="landscape">
        {imageRender()}
      </div>
      <p>Project Details: {project ? project.description : null} {' '}<br/>
      Project Cost: ${project != undefined ? project.cost : 0}<br/>
      Project Completed: {project != undefined ? project.completed.toString() : "false"} <button class="update-button" onClick={this.handleOnClick}>✓</button></p>
      <button class="delete-button" onClick={this.handleOnDelete}> Delete Project </button>
      <br/>
      <br/>
      <h3 style={{fontFamily: "Verdana"}}>Materials Needed for this Project</h3>
      <MaterialsContainer project={project}/>
      <CommentsContainer project={project}/>
    </div>
    )
  }
}

export default Project;
//<img src={project != undefined ? project.image : "https://static.vecteezy.com/system/resources/previews/000/163/317/non_2x/doodled-blue-craft-tools-vector.jpg"}/>

///<img src={project != undefined ? project.image : "https://static.vecteezy.com/system/resources/previews/000/163/317/non_2x/doodled-blue-craft-tools-vector.jpg"}/>
/*let  project = {}
  if (this.props.hasOwnProperty('match')) {
    project = this.props.projects.filter(project => project.id == this.props.match.params.id)[0]
  }
  else {
    project = this.props.project
  }*/
//  <CommentsContainer project={project}/>
