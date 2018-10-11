import React from 'react'

import { Link } from 'react-router-dom'

const Menu = () => {

  const linkButton = {
    backgroundColor: '#dac292',
    color: '#3e4444',
    padding: '14px 25px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
  }

  const menuStyle = {
        fontWeight: 'bold',
        margin: '10px',
        backgroundColor: '#e6e2d3',
        padding: '5px',
        border: '5px none #b9936c',
        borderLeftStyle: 'solid'
      }

  return (
    <div style={menuStyle}>
      <Link style={linkButton} to="/">anecdotes</Link>&nbsp;
      <Link style={linkButton} to="/create">create new</Link> &nbsp;
      <Link style={linkButton} to="/about">about</Link> &nbsp;
    </div>
  )
}

export default Menu
