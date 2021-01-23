import React from 'react';
import MaterialInput from '../components/materials/MaterialInput'
import MaterialsList from '../components/materials/MaterialsList'
import { connect } from 'react-redux'




class MaterialsContainer extends React.Component {
  render() {
    return (
      <div>
        <MaterialsList materials={this.props.project && this.props.project.materials}/>
        <MaterialInput project={this.props.project}/>
      </div>
    )
  }

}



export default connect()(MaterialsContainer);
