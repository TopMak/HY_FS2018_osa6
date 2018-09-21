import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteAnecdoteNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

import anecdoteService from '../services/anecdotes'

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
                const votedAnecdote = await anecdoteService.voteAnecdote(anecdote)
                // console.log(votedAnecdote)
                this.props.voteAnecdote(anecdote.id)
                this.props.voteAnecdoteNotification(votedAnecdote.content)
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
