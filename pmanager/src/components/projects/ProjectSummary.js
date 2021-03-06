import React from 'react'
import {Link} from 'react-router-dom'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"><Link to={`/project/${project.id}`} id={project.id} >{project.title}</Link></span>
                <p>Posted by Rufusy Idachi</p>
                <p className="grey-text">3rd sept, 2am</p>
            </div>
        </div>
    )
}

export default ProjectSummary
