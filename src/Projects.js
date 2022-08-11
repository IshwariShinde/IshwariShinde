import React from 'react'
import './CSS/projects.css'
import ProjectCard from './ProjectCard'
import ytClone from './Assets/ytclone.png'
import hajeri from './Assets/hajeri.png'
import todoimg from './Assets/todoimg.png'

const Projects = () => {
  return (
    <div className='projects' id='projects' data-aos="zoom-in">
        <h2>My Projects</h2>
        <div className='projectcards'>
          <ProjectCard projectimage={ytClone} projecttitle='Youtube Clone' projectbtn='view project' projectlink='https://ishwarishinde.github.io/youtube-clone/'/>
          <ProjectCard projectimage={todoimg} projecttitle='To Do List' projectlink='https://ishwarishinde.github.io/todolist.github.io/'/>
          <ProjectCard projectimage={hajeri} projecttitle='Hajeri Site' projectlink='https://ishwarishinde.github.io/hajerilayout.github.io/' />
        </div>
        

    </div>
  )
}

export default Projects