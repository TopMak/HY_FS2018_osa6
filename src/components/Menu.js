import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

// const NavMenu = () => {

class NavMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      activeItem: 'home',
      newMenu: true
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  changeMenu = () => this.setState({newMenu: !this.state.newMenu })

  // return (
  //
  //   <Menu tabular>
  //   <Menu.Item link>
  //     <NavLink activeStyle={linkButtonActive} style={linkButton} exact to="/">anecdotes</NavLink>&nbsp;
  //   </Menu.Item link>
  //   <Menu.Item link>
  //     <NavLink activeStyle={linkButtonActive} style={linkButton} exact to="/create">create new</NavLink> &nbsp;
  //   </Menu.Item>
  //   <Menu.Item link>
  //     <NavLink activeStyle={linkButtonActive} style={linkButton} exact to="/about">about</NavLink> &nbsp;
  //   </Menu.Item>
  //   </Menu>
  // )

  render(){

    const menuStyle = {
          fontWeight: 'bold',
          marginBottom: '10px',
          backgroundColor: '#e6e2d3',
          padding: '5px',
          border: '5px none #b9936c',
          borderLeftStyle: 'solid'
        }

    const linkButton = {
      fontWeight: 'bold',
      backgroundColor: '#dac292',
      color: '#3e4444',
      padding: '14px 25px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
    }

    const linkButtonActive = {
      fontWeight: 'bold',
      fontSize: '1.2em',
      backgroundColor: '#dac292',
      color: '#3e4444',
      padding: '14px 25px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
    }

    const { activeItem } = this.state

    if(this.state.newMenu){
      return (
        <Menu tabular>
          <Menu.Item name='home' as={Link} to="/" active={activeItem === 'home'} onClick={this.handleItemClick}>
            Anecdotes
          </Menu.Item>
          <Menu.Item name='create' as={Link} to="/create" active={activeItem === 'create'} onClick={this.handleItemClick}>
            Create new
          </Menu.Item>
          <Menu.Item name='about' as={Link} to="/about" active={activeItem === 'about'} onClick={this.handleItemClick}>
            About
          </Menu.Item>
          <Menu.Item  onClick={this.changeMenu}>
            ChangeMenu to teht6.20
          </Menu.Item>
        </Menu>
      )
  } else {

      // Earlier menu from 6.20
      return (
        <div style={menuStyle}>
          <NavLink activeStyle={linkButtonActive} style={linkButton} exact to="/">anecdotes</NavLink>&nbsp;
          <NavLink activeStyle={linkButtonActive} style={linkButton} exact to="/create">create new</NavLink> &nbsp;
          <NavLink activeStyle={linkButtonActive} style={linkButton} exact to="/about">about</NavLink> &nbsp;
          <NavLink style={linkButton} onClick={this.changeMenu} to="/" >Change Menu to teht6.23</NavLink> &nbsp;
        </div>
      )
    }
  }
}

export default NavMenu
