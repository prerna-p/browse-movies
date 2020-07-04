import React from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
  return (
    <div>
      <img
        alt="loading.."
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </div>
  )
}

export default Spinner
