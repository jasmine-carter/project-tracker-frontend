import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProjectList from '../components/projects/ProjectList'
import ProjectInput from '../components/projects/ProjectInput'
import {fetchProjects} from '../actions/fetchProjects'
import { Route, Switch } from 'react-router-dom'
import Project from '../components/projects/Project'

class ProjectsContainer extends Component {

componentDidMount(){
  this.props.fetchProjects()
}

  render() {
    return(
      <div>
      <Switch> //chooses the first route that matches the path
        <Route path='/projects/new' component={ProjectInput} />
        <Route path='/projects/:id' render={(routerProps) => <Project {...routerProps} projects={this.props.projects}/>}/>
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

const mapDispatchToProps = dispatch => ({
  addProject: text => dispatch({type: 'ADD_PROJECT', text}),
  deleteProject: id => dispatch({type: 'DELETE_PROJECT', id})
})

export default connect(mapStateToProps, {fetchProjects})(ProjectsContainer);
