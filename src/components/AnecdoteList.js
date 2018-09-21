import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { timeoutNotify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {

  //TODO or think: remove voteAnecdote action,
  //since voting is done via backend and result is returned as +1 already

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.filSortAnecdotes.map(anecdote =>
          <div key={anecdote.id}>
            {anecdote.content}
            <div>
              has {anecdote.votes}
              <button onClick={async () => {
                //async operations in action creators
                this.props.voteAnecdote(anecdote)
                this.props.timeoutNotify(`You voted '${anecdote.content}'`, 5)
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
  { voteAnecdote, timeoutNotify }
)(AnecdoteList)
