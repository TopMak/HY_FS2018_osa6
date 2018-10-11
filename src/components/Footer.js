import React from 'react'

import { Segment } from 'semantic-ui-react'

// const paddingTop = {
//   paddingTop: '10px',
//   borderTop: '1px'
// }

const Footer = () => (
  <Segment vertical textAlign='left' >
  <div >
    Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.
    See <a href='https://github.com/mluukkai/routed-anecdotes'>https://github.com/mluukkai/routed-anecdotes</a> for the original source code.

  </div>
  </Segment>
)

export default Footer
