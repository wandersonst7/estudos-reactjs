import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Clique e olhe o console!</button>
    </div>
  )
}

export default ExecuteFunction