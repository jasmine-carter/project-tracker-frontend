import React from 'react';
import {deleteMaterial} from '../../actions/deleteMaterial'
import {connect} from 'react-redux'

const Material = (props) => {

  const handleOnClick = () => {
    debugger;
    let materialId = props.material.id
    let projectId = props.material.project_id
    props.deleteMaterial(projectId, materialId)
  }
console.log(props)
return (
  <div key={props.material.id}>
    <ul>
    <li>{props.material.name}
      <ul>
        <li>Amount needed: {props.material.quantity}</li>
        <li> Cost per Unit: ${props.material.cost}</li>
        <li> Purchased?: {props.material.purchased.toString()} </li>
        <button onClick={handleOnClick}> Delete Material </button>
      </ul>
    </li>
    </ul>
  </div>
  )

}
export default connect(null,{deleteMaterial})(Material)
//<button onClick={() => handleOnClick(props.material.id, props.material.project_id)}> Delete Material </button>
