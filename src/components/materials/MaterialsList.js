import React from 'react'
import Material from './Material'

//functional component
const MaterialsList = (props) => {
  console.log(props)

  const {materials} = props
  const projectMaterials = materials.map(material => {
    return(
      <div><Material
      key={material.id}
      material = {material}
      />
      </div>
    )
  })

  return (
    <div>
    Materials Needed for this Project
    {projectMaterials}
    </div>
  )

}

export default MaterialsList;
/*  <Material materials={props.materials}/>*/
