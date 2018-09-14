import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteAnecdoteNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  render() {

    const filterParams = this.props.filter
    const anecdotes = this.props.anecdotes
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
                this.props.voteAnecdote(anecdote.id)
                this.props.voteAnecdoteNotification(anecdote.content)
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

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    anecdotes: state.anecdotes
  }
}

// export default AnecdoteList

export default connect(
  mapStateToProps,
  { voteAnecdote, voteAnecdoteNotification }
)(AnecdoteList)
