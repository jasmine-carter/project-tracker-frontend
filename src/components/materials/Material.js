import React, { Component } from 'react';

class Material extends Component {

  render() {
//for every material returned through props,
  let material = this.props.material
      return (
        <div key={material.id}>
          <ul>
          <li>{material.name}
            <ul>
              <li>Amount needed: {material.quantity}</li>
              <li> Cost per Unit: ${material.cost}</li>
              <li> Purchased?: {material.purchased.toString()} </li>
              <button> Delete Material </button>
            </ul>
          </li>
          </ul>
        </div>
      )

  }


}

export default Material
