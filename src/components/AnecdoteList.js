import React from 'react'

import { Link } from 'react-router-dom'
import { List, Segment } from 'semantic-ui-react'

const AnecdoteList = ({ anecdotes }) => {

// return (
//   <div>
//     <h2>Anecdotes</h2>
//     <ul>
//       {anecdotes.map(anecdote =>
//         <li key={anecdote.id} > <Link to={`/anecdote/${anecdote.id}`}>{anecdote.content}</Link> </li>
//       )}
//     </ul>
//   </div>
// )

return (
  <Segment>
    <List divided relaxed>
    {anecdotes.map(anecdote =>
      <List.Item key={anecdote.id} >
        <List.Icon name='comment outline' />
         <List.Content>
           <Link to={`/anecdote/${anecdote.id}`}>{anecdote.content}</Link>
         </List.Content>
       </List.Item>)}
     </List>
   </Segment>
)
}

export default AnecdoteList
