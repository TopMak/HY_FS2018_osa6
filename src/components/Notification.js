import React from 'react'
// import { clearNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

// class Notification extends React.Component {

const Notification = (props) => {

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
      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

// export default Notification
export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(Notification)
