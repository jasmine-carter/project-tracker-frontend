import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProjectList from '../components/projects/ProjectList'
import ProjectInput from '../components/projects/ProjectInput'

class ProjectsContainer extends Component {

componentDidMount(){

}

  render() {
    return(
      <div>
        <ProjectInput />
        <ProjectList projects={this.props.projects} />
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      projects: state.accounts
    }
}

const mapDispatchToProps = dispatch => ({
  addProject: text => dispatch({type: 'ADD_PROJECT', text}),
  deleteProject: id => dispatch({type: 'DELETE_PROJECT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);
