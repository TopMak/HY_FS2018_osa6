import React from 'react'

const Notification = ({text}) => {
  if(text === ''){
    //no notification
    return (
      <div>

      </div>
    )
  }
  else {
    return (
      <div>
        {text}
      </div>
    )
  }
}


export default Notification
