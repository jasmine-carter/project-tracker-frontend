import React from 'react';
import {deleteMaterial} from '../../actions/deleteMaterial'
import {connect} from 'react-redux'

const Material = (props) => {

  const handleOnDelete = () => {
    let materialId = props.material.id
    let projectId = props.material.project_id
    props.deleteMaterial(projectId, materialId)
  }

  const handleOnClick = () => {
    console.log(props)
  }

console.log(props)
return (
  <div>
  <div key={props.material.id}>
    <h4 class="materialName">{props.material.name}</h4>
      <ul>
        <li>Amount needed: {props.material.quantity}</li>
        <li> Cost per Unit: ${props.material.cost}</li>
        <li> Purchased?: {props.material.purchased.toString()} <button class="update-button">✓</button></li>
        <button class="delete-button" onClick={handleOnDelete}> Delete Material </button>
      </ul>
  </div>
  </div>
  )

}
export default connect(null,{deleteMaterial})(Material)
//<button onClick={() => handleOnClick(props.material.id, props.material.project_id)}> Delete Material </button>
