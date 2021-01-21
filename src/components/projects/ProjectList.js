import React from 'react';
import Project from './Project'
//functional component responsible for rendering list of projects
//will get projects from props from ProjectsContainer

const ProjectList = (props) => {
  console.log(props)
  return (
    <ul>
      {props.projects.map(project => <li key={project.id} >{project.name} - {project.description}</li> )}
    </ul>
  )
}

export default ProjectList
