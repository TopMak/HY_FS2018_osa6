
const initialState ='Test initial notification'

const notificationReducer = (store = initialState, action) => {
  switch(action.type) {

  case 'VOTE_ANECDOTE_NOTIF':{
    // return state.concat(action.data)
    return `Voted anecdote: ${action.content}`
  }
  case 'CREATE_ANECDOTE_NOTIF': {
    return `Created new anecdote: ${action.content}`
  }
  case 'CLEAR_ANECDOTE_NOTIF': {
    return ''
  }

  default:
    return store
  }

}

//Action creators
export const createAnecdoteNotification = (anecdote) => {
  return {
    type: 'CREATE_ANECDOTE_NOTIF',
    content: anecdote
  }
}

export const voteAnecdoteNotification = (anecdote) => {
  return {
    type: 'VOTE_ANECDOTE_NOTIF',
    content: anecdote
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_ANECDOTE_NOTIF'
  }
}

export default notificationReducer
