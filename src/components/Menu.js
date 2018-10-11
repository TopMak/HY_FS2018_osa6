import React from 'react'

import { NavLink, Link } from 'react-router-dom'

const Menu = () => {

  const linkButton = {
    backgroundColor: '#dac292',
    color: '#3e4444',
    padding: '14px 25px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
  }

  const linkButtonActive = {
    fontSize: '1.2em',
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
      <NavLink activeStyle={linkButtonActive} style={linkButton} exact to="/">anecdotes</NavLink>&nbsp;
      <NavLink activeStyle={linkButtonActive} style={linkButton} exact to="/create">create new</NavLink> &nbsp;
      <NavLink activeStyle={linkButtonActive} style={linkButton} exact to="/about">about</NavLink> &nbsp;
    </div>
  )
}

export default Menu
