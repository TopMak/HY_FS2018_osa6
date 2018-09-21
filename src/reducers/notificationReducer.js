
const initialState ='Test initial notification'

const notificationReducer = (store = initialState, action) => {
  switch(action.type) {

  case 'ANECDOTE_NOTIF_TIMEOUT': {
    return action.content
  }
  case 'CLEAR_ANECDOTE_NOTIF': {
    return ''
  }
  default:
    return store
  }

}

//timeout helper
function timeout(s) {
  return new Promise(resolve => setTimeout(resolve, s*1000))
}

//Action creators

export const timeoutNotify = (anecdote, timeoutSecs) => {
  return async (dispatch) => {
    dispatch({
      type: 'ANECDOTE_NOTIF_TIMEOUT',
      content: anecdote
    })
    await timeout(timeoutSecs)
    dispatch({
      type: 'CLEAR_ANECDOTE_NOTIF'
    })
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_ANECDOTE_NOTIF'
  }
}

export default notificationReducer
