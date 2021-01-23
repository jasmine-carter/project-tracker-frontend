import React, { Component } from 'react';
import {deleteMaterial} from '../../actions/deleteMaterial'
import {connect} from 'react-redux'

class Material extends Component {

  handleOnClick = () => {
    let materialId = this.props.material.id
    let projectId = this.props.material.project_id
    console.log(this.props)
    this.props.deleteMaterial(projectId, materialId)
  }

  render() {
  let material = this.props.material
      return (
        <div key={material.id}>
          <ul>
          <li>{material.name}
            <ul>
              <li>Amount needed: {material.quantity}</li>
              <li> Cost per Unit: ${material.cost}</li>
              <li> Purchased?: {material.purchased.toString()} </li>
              <button onClick={this.handleOnClick}> Delete Material </button>
            </ul>
          </li>
          </ul>
        </div>
      )
  }
}

export default connect(null,{deleteMaterial})(Material)
