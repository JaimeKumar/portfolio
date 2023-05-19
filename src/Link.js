import React from 'react'

export default function Link({ link, logo, title }) {
  return (
    <div className='logo'>
        <a href={link}>
            <img src={logo} alt={title} />
            <p>{title}</p>
        </a>
    </div>
  )
}
