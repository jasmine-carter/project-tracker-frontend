import React from 'react';
import { connect } from 'react-redux'
import { fetchProjects } from './actions/fetchProjects'


class App extends React.Component {

componentDidMount() {
  this.props.fetchProjects()
}

  render() {
    return (
      <div className="App">
          APP
      </div>
    );
  }
}


export default connect(null, {fetchProjects})(App);
