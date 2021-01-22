import React from 'react';
import Project from './Project'
import {Route, Link} from 'react-router-dom'
import {deleteProject} from '../../actions/deleteProject'
//functional component responsible for rendering list of projects
//will get projects from props from ProjectsContainer

const ProjectList = (props) => {

  return (
    <ul>
      {props.projects.map(project =>
        <li key={project.id}>
          <Link to={`/projects/${project.id}`}>{project.name} - {project.description} </Link>
        </li> )}
    </ul>
  )
}

export default ProjectList
