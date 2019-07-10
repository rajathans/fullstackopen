import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [counter, setCounter] = useState(0)

  const setToValue = (value) => () => setCounter(value) // The function is not called, only defined

  console.log('rendering...', counter)

  const Display = (props) => {
    return (
      <div>
        {props.counter}
      </div>
    )
  }

  const Button = (props) => {
    return (
      <>
        <button onClick={setToValue(props.value)}>
          {props.text}
        </button>
      </>
    )
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button value={counter+1} text="plus"/>
      <Button value={counter-1} text="minus"/>
      <Button value={0} text="zero"/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)