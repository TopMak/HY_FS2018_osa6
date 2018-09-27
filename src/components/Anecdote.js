
import React from 'react'

const Anecdote = ({anecdote}) => {
  return (
    <div>
    <h2> "{anecdote.content}" by {anecdote.author} </h2>
    <ul style={{ listStyleType: "none" }}>
      <li> voted {anecdote.votes} times</li>
      <li> See more at URL: <a href={anecdote.info}>{anecdote.info}</a> </li>
    </ul>
    </div>
  )
}


export default Anecdote
