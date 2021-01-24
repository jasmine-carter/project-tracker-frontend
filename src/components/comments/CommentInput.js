import React from 'react';
import {connect} from 'react-redux';
import {addProjectComment} from '../../actions/addProjectComment'

class CommentInput extends React.Component {

  state = {
    content: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addProjectComment(this.state, this.props.project.id)
  }

  render() {
    return (
      <div>
      <h4 style={{fontFamily: "Verdana"}}>Notes about this project</h4>
      <form onSubmit={(event) =>this.handleSubmit(event)}>
      <label>Note</label>
      <input
        type="text"
        name="content"
        value={this.state.content}
        placeholder="Project Notes"
        onChange={this.handleOnChange}/>
      <input
        type="submit"
        value="Add Project Comment" />
      </form>
      </div>
    )
  }

}

export default connect(null, {addProjectComment})(CommentInput);
