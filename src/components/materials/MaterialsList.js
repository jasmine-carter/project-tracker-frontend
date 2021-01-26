import React from 'react'
import Material from './Material'



//functional component
const MaterialsList = (props) => {

function whatRenders(){
  if (materials == undefined || materials.length === 0) {
    return("There are no materials yet, add some below!")
  } else {
    const newMaterials = materials.map(material => {
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
     return newMaterials

  }
}


  const {materials} = props

  //debugger;
  return (
    <div style={{background: "#ffdaae"}}>
    <div class="MaterialsList">
    {whatRenders()}
    </div>
    </div>
  )

}

export default MaterialsList;
/*  <Material materials={props.materials}/>*/

/*const projectMaterials = materials.map(material => {
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
*/
