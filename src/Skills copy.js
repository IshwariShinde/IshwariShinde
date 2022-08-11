import React from 'react'
import './CSS/skills.css'
import { Icon } from '@iconify/react';

const Skills = () => {
  return (
    <div className='skills' id='skills'  data-aos="fade-down">
        <h2>My Skills</h2>
        <Icon icon="vscode-icons:file-type-html" className='skillIcon' />
        <Icon icon="logos:css-3" className='skillIcon' />
        <Icon icon="vscode-icons:file-type-reactts" className='skillIcon' />
        <Icon icon="fluent:javascript-16-regular" className='skillIcon' id='js_color' />
        <Icon icon="logos:nodejs-icon" className='skillIcon'/>
        <Icon icon="simple-icons:mongodb" className='skillIcon'  id='mongodb_color' />
    </div>
  )
}

export default Skills