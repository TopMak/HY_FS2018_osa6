

const anecdoteReducer = (store = [], action) => {
  if (action.type === 'INIT') {

    return action.content
  }
  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)

    return [...old, { ...voted, votes: voted.votes+1 } ]
  }
  if (action.type === 'CREATE') {
    // console.log(action.content);
    return [...store, action.content]
  }

  return store
}

//Action creators

export const initAnecdotes = (anecdotes) => {
  return {
    type: 'INIT',
    content: anecdotes
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'CREATE',
    content: anecdote
  }
}

export const voteAnecdote = (anecdoteID) => {
  return {
    type: 'VOTE',
    id: anecdoteID
  }
}

export default anecdoteReducer
