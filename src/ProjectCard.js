import React from 'react';
import './CSS/projectCard.css'

const ProjectCard = ({projectimage,projecttitle,projectlink}) => {
  return (
    <div className='projectCard'>
 <img src={projectimage} alt='' className='projectimg'/>
 <h2 className='projecttitle'>{projecttitle}</h2>
<a href= {projectlink} target='blank'><button className='project_btn'>View Project</button></a>

    </div>
  )
}

export default ProjectCard