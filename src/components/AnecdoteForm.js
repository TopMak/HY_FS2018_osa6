import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { timeoutNotify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'


class AnecdoteForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()

    const anecdoteContent = e.target.anecdote.value
    e.target.anecdote.value = ''
    // console.log(anecdoteContent);
    //async operations in action creators
    this.props.createAnecdote(anecdoteContent)
    this.props.timeoutNotify(`Created new anecdote: '${anecdoteContent}'`, 5)
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
  { createAnecdote, timeoutNotify }
)(AnecdoteForm)
