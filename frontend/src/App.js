import axios from 'axios'
import React from 'react'

const App = () => {
  const clickFunction= ()=>{
    window.open("http://localhost:5000/auth/github", "_self");
  }
  return (
    <div>
      <button onClick={clickFunction}>Github</button>
    </div>
  )
}

export default App