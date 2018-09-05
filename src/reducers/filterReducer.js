
const initialState = ''

const filterReducer = (store = initialState, action) => {
  switch(action.type) {
  case 'SET_FILTER':{
    return action.filterString.toLowerCase()
  }
  case 'CLEAR_FILTER': {
    return ''
  }
  default:
    return store
  }
}

export const setFilter = (filterString) => {
  return {
    type: 'SET_FILTER',
    filterString
  }
}

export const clearFilter = () => {
  return {
    type: 'CLEAR_FILTER'
  }
}

export default filterReducer
