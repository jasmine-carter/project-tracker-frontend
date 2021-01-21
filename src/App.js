import React from 'react';
import { connect } from 'react-redux'
import { fetchProjects } from './actions/fetchProjects'
import ProjectsContainer from './containers/ProjectsContainer';


class App extends React.Component {

componentDidMount() {
  this.props.fetchProjects()
}

  render() {
    return (
      <div className="App">
          <ProjectsContainer  />
      </div>
    );
  }
}


export default connect(null, {fetchProjects})(App);
