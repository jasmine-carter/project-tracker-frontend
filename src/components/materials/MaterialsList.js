import React from 'react'
import Material from './Material'



//functional component
const MaterialsList = (props) => {

  const {materials} = props
  const projectMaterials = materials.map(material => {
    return(
      <div className="Material" key={material.id}><Material
      key={material.id}
      material = {material}
      deleteMaterial={props.deleteMaterial}
      updateMaterial={props.updateMaterial}
      />
      </div>
    )
  })

  return (
    <div style={{background: "#ffdaae"}}>
    <div class="MaterialsList">
    {projectMaterials.length > 0 ? projectMaterials : "It looks like you need to add materials to your project!"}
    </div>
    </div>
  )

}

export default MaterialsList;
/*  <Material materials={props.materials}/>*/
