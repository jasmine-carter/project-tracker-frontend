import React, { Component } from 'react';
import { connect } from 'react-redux'
import ProjectList from '../components/projects/ProjectList'
import ProjectInput from '../components/projects/ProjectInput'

class ProjectsContainer extends Component {
  render() {
    return(
      <div>
        <ProjectInput />
        <ProjectList projects={this.props.projects} />
      </div>
    )
  }
}

const mapStateToProps = state ({projects: state.projects})

export default connect(mapStateToProps)(ProjectsContainer);
