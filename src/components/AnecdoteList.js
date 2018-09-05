import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteAnecdoteNotification } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {
    //const anecdotes = this.props.store.getState().anecdotes
    const filterParams = this.props.store.getState().filter
    const anecdotes = this.props.store.getState().anecdotes
      .filter(anecdote => anecdote.content.toLowerCase().includes(filterParams))

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.store.dispatch(voteAnecdote(anecdote.id))
                this.props.store.dispatch(voteAnecdoteNotification(anecdote.content))
              }
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
