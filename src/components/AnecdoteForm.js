import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createAnecdoteNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()

    const anecdoteContent = e.target.anecdote.value
    e.target.anecdote.value = ''
    // console.log(anecdoteContent);
    const newAnecdote = await anecdoteService.postAnecdote(anecdoteContent)
    // console.log(newAnecdote)
    this.props.createAnecdote(newAnecdote)
    this.props.createAnecdoteNotification(newAnecdote)
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

// export default AnecdoteForm
export default connect(
  null,
  { createAnecdote, createAnecdoteNotification }
)(AnecdoteForm)
