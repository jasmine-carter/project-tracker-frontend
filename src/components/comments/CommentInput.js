import React from 'react';

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
    console.log(this.props)
    this.props.addProjectComment(this.state, this.props.project.id)
  }

  render() {
    return (
      <div>
      <h4 style={{fontFamily: "Verdana"}}>Add notes about this project</h4>
      <form onSubmit={(event) =>this.handleSubmit(event)}>
      <label>Note</label>{' '}
      <input
        type="text"
        name="content"
        value={this.state.content}
        placeholder="Project Notes"
        onChange={this.handleOnChange}/>{' '}
      <input
        type="submit"
        value="Add Project Note" />
      </form>
      </div>
    )
  }

}

export default CommentInput;
