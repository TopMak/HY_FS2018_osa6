import React from 'react'
import { clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

// class Notification extends React.Component {

const Notification = (props) => {

  //Notification "automatically resets" (no need to call every time notification is set)
  // notificationTimeout(){
  //   //clearTimeout(timerHandle)
  //   setTimeout(() => {
  //     console.log('timeout')
  //     this.props.clearCurrentNotification()
  //   }, 5000)
  // }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if(props.notification === ''){
    return (
      <div>
        {/*No notification */}
      </div>
    )
  } else {

    return (
      <div style={style}>
        {props.notification}
        {props.clearCurrentNotification()}
      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCurrentNotification: () => {
      setTimeout(() => {
        console.log('timeout')
        dispatch(clearNotification())
      }, 5000)
    }
  }
}

// export default Notification
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)
