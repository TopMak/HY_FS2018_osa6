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
    const successStyle = {
      fontWeight: 'bold',
      margin: '10px',
      backgroundColor: '#b5e7a0',
      padding: '5px',
      border: '5px none green',
      borderLeftStyle: 'solid'
    }
    return (
      <div style={successStyle} >
        {text}
      </div>
    )
  }
}


export default Notification
