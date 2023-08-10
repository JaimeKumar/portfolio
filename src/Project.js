import React from 'react'

export default function Project({ project, i }) {
    let className = 'projBody';
    if (i % 2 === 1) className += ' projRev';
    let thisAlt = 'Screenshot of ' + project.title;
  return (
    <a href={project.url} className={'project'} target="_blank">
      <h2>{project.title}</h2>
      <div className={className}>
        <p>{project.description}</p>
        <img src={project.img} alt={thisAlt} />
      </div>
    </a>
  )
}
