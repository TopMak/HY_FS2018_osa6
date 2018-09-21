import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const postAnecdote = async (content) => {
  const response = await axios.post(url, { content, votes: 0 })
  return response.data
}

const voteAnecdote = async (anecdote) => {
  //add votes here
  const votedAnecdote = {...anecdote, votes: anecdote.votes + 1}
  const response = await axios.put(`${url}/${votedAnecdote.id}`, votedAnecdote)
  return response.data
}

export default { getAll, postAnecdote, voteAnecdote }
