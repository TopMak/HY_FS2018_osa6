import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createAnecdoteNotification } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.store.dispatch(createAnecdote(e.target.anecdote.value))
    this.props.store.dispatch(createAnecdoteNotification(e.target.anecdote.value))

    e.target.anecdote.value = ''
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default AnecdoteForm
