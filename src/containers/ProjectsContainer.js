import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProjectList from '../components/projects/ProjectList'
import ProjectInput from '../components/projects/ProjectInput'
import {fetchProjects} from '../actions/fetchProjects'
import {deleteProject} from '../actions/deleteProject'
import {updateProject} from '../actions/updateProject'
import { Route, Switch } from 'react-router-dom'
import Project from '../components/projects/Project'
import Home from '../components/Home'

class ProjectsContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      projects_sorted: false,
      projects: []
    }}

componentDidMount(){
  this.props.fetchProjects()
}

sortProjects = () => {
  let projects = [...this.props.projects]
    projects.sort(function(a,b) {
    let nameA = a.name.toLowerCase()
    let nameB = b.name.toLowerCase()
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  this.setState({
    projects: projects,
    projects_sorted: true
  })
  console.log("this is the state")
  console.log(this.state)
  console.log("these are props")
  console.log(this.props)
}

  render() {
    let listedProjects

    if (this.state.projects_sorted == false) {
      listedProjects = this.props.projects
    } else {
      listedProjects = this.state.projects
    }


    //console.log(`ProjectsContainer mounted ${this.props == undefined}`)
    return(
      <div class="projectsContainer">
      <Switch> //chooses the first route that matches the path
        <Route exact path='/' component={Home} />
        <Route path='/projects/new' component={ProjectInput} />
        <Route path='/projects/:id' render={(routerProps) => <Project {...routerProps} projects={this.props.projects} deleteProject={this.props.deleteProject} updateProject={this.props.updateProject}/>}/>
        <Route exact path='/projects' render={(routerProps) => <ProjectList projects={listedProjects} sortProjects={this.sortProjects}/>}/>
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      projects: state.projects.projects
    }
}

export default connect(mapStateToProps, {fetchProjects, deleteProject, updateProject})(ProjectsContainer);
