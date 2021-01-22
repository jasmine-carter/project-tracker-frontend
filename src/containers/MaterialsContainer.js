import React from 'react';
import MaterialInput from '../components/materials/MaterialInput'
import MaterialsList from '../components/materials/MaterialsList'
import { connect } from 'react-redux'




class MaterialsContainer extends React.Component {

  render() {
    return (
      <div>
        Materials Container!
        <MaterialInput project={this.props.project}/>
        <MaterialsList materials={this.props.account && this.props.project.materials}/> //shorthand terniary if props project exists, then this.props.materials
      </div>
    )
  }

}



export default connect()(MaterialsContainer);
