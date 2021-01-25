import React from 'react';
import Project from './Project'
import {Route, Link} from 'react-router-dom'
//functional component responsible for rendering list of projects
//will get projects from props from ProjectsContainer

const ProjectList = (props) => {
  return (
    <div>
      <h3>All Projects</h3>
        <ul>
          {props.projects.length >1 && props.projects.map(project =>
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>{project.name} </Link>
            </li> )}
        </ul>
    </div>
  )
}

export default ProjectList
