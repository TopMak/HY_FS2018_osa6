
import anecdoteService from '../services/anecdotes'

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

//using REDUX-thunk
export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      content: anecdotes
    })
  }
}

//using REDUX-thunk
export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.postAnecdote(anecdote)
    dispatch({
      type: 'CREATE',
      content: newAnecdote
    })
  }
}

//using REDUX-thunk
export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.voteAnecdote(anecdote)
    dispatch({
      type: 'VOTE',
      id: updatedAnecdote.id
    })
  }
}

export default anecdoteReducer
