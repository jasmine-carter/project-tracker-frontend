import React from 'react';
import MaterialInput from '../components/materials/MaterialInput'
import MaterialsList from '../components/materials/MaterialsList'
import {deleteMaterial} from '../actions/deleteMaterial'
import {updateMaterial} from '../actions/updateMaterial'
import { connect } from 'react-redux'


//move handleDelete here out of material componenent
//make class componenent and connect to store





class MaterialsContainer extends React.Component {
  render() {
    return (
      <div>
        <MaterialsList materials={this.props.project && this.props.project.materials} deleteMaterial={this.props.deleteMaterial} updateMaterial={this.props.updateMaterial} />
        <MaterialInput project={this.props.project}/>
      </div>
    )
  }

}


export default connect(null, {deleteMaterial, updateMaterial})(MaterialsContainer);
