import React from 'react';
import MaterialInput from '../components/materials/MaterialInput'
import MaterialsList from '../components/materials/MaterialsList'
import { connect } from 'react-redux'




class MaterialsContainer extends React.Component {
  render() {
      console.log(this.props.project.materials)
    return (
      <div>
        Materials Container!
        <MaterialInput project={this.props.project}/>
        <MaterialsList materials={this.props.project ? this.props.project.materials : this.props}/>
      </div>
    )
  }

}



export default connect()(MaterialsContainer);
