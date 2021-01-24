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

componentDidMount(){
  this.props.fetchProjects()
}

  render() {
    return(
      <div class="projectsContainer">
      <Switch> //chooses the first route that matches the path
        <Route exact path='/' component={Home} />
        <Route path='/projects/new' component={ProjectInput} />
        <Route path='/projects/:id' render={(routerProps) => <Project {...routerProps} projects={this.props.projects} deleteProject={this.props.deleteProject} updateProject={this.props.updateProject}/>}/>
        <Route exact path='/projects' render={(routerProps) => <ProjectList projects={this.props.projects}/>}/>
      </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      projects: state.projects
    }
}

export default connect(mapStateToProps, {fetchProjects, deleteProject, updateProject})(ProjectsContainer);
