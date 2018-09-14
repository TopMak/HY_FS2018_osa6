import React from 'react'
import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

// class Filter extends React.Component {

const Filter = (props) => {

  // handleChange = (event) => {
  //   this.props.setFilter(event.target.value)
  // }

  const style = {
    margin: 10
  }

  return (
    <div style={style}>
      filter <input onChange={ (event) => props.setFilter(event.target.value) }/>
    </div>
  )

}


// export default Filter

export default connect(
  null,
  { setFilter }
)(Filter)
