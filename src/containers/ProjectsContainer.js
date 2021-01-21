import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProjectList from '../components/projects/ProjectList'
import ProjectInput from '../components/projects/ProjectInput'
import {fetchProjects} from '../actions/fetchProjects'

class ProjectsContainer extends Component {

componentDidMount(){
  this.props.fetchProjects()
}

  render() {
    return(
      <div>
        <ProjectInput /><br/><br/>
        <ProjectList projects={this.props.projects} />
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
