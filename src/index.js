import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'


const render = () => {
  //annetaan store providen ja suoraan APP:ille propsina (muutetaan ensin vain Notification (teht6.6))
  ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
