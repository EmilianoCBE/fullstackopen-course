import { useState } from "react"
import { Button } from "./components/Button"
import { Display } from "./components/Display"

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    let newCountGood = good
    setGood(newCountGood += 1)
  }

  const addNeutral = () => {
    let newCountNeutral = neutral
    setNeutral(newCountNeutral += 1)
  }

  const addBad = () => {
    let newCountBad = bad
    setBad(newCountBad += 1)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button text='good' onClick={addGood}/>
      <Button text='neutral' onClick={addNeutral}/>
      <Button text='bad' onClick={addBad}/>
      <h1>statistics</h1>
      <Display text='good' count={good}/>
      <Display text='neutral' count={neutral}/>
      <Display text='bad' count={bad}/>
    </>
  )
}

export default App
