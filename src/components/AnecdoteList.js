import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteAnecdoteNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.filSortAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            {anecdote.content}
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.voteAnecdote(anecdote.id)
                this.props.voteAnecdoteNotification(anecdote.content)
              }
              }>vote</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const filterSortAnecdotes = (anecdotes, filter) => {
  return anecdotes
    .filter(anecdote => anecdote.content.toLowerCase().includes(filter))
    .sort((a, b) => b.votes - a.votes)
}

const mapStateToProps = (state) => {
  return {
    // filter: state.filter,
    // anecdotes: state.anecdotes
    filSortAnecdotes: filterSortAnecdotes(state.anecdotes, state.filter)
  }
}

// export default AnecdoteList

export default connect(
  mapStateToProps,
  { voteAnecdote, voteAnecdoteNotification }
)(AnecdoteList)
