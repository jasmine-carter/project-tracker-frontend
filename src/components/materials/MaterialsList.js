import React from 'react'

//functional component
const MaterialsList = (props) => {
  return (
    <div>
      {props.materials && props.materials.map(material =>
        <div key={material.id}>
        <ul>
        <li> {material.name}
        <ul>
          <li>Amount needed: {material.quantity}</li>
          <li> Cost per Unit: ${material.cost}</li>
          <li> Purchased?: {material.purchased.toString()} </li>
        </ul>
        </li>
        </ul>
        </div>
      )}
    </div>
  )

}

export default MaterialsList;
