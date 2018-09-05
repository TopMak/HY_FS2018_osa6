import React from 'react'
import { clearNotification } from '../reducers/notificationReducer'

class Notification extends React.Component {

  //Notification "automatically resets" (no need to call every time notification is set)
  notificationTimeout(){
    setTimeout(() => {
      console.log('timeout')
      this.props.store.dispatch(clearNotification())
    }, 5000)
  }

  render() {

    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    if(this.props.store.getState().notification === ''){
      return (
        <div>
          {/*No notification */}
        </div>
      )
    } else {

      return (
        <div style={style}>
          {this.props.store.getState().notification}
          {this.notificationTimeout()}
        </div>
      )

    }
  }
}

export default Notification
