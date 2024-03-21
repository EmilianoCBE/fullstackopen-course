import { useState } from "react"
import { Button } from "./components/Button"
import { Display } from "./components/Display"

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  let totalAverage = average / total
  let positiveAverage = positive / total

  const addGood = () => {
    let newCountGood = good
    let newTotal = total
    let newAverage = average
    let newPositive = positive
    setGood(newCountGood += 1)
    setTotal(newTotal += 1)
    setAverage(newAverage += 1)
    setPositive(newPositive += 1)
  }

  const addNeutral = () => {
    let newCountNeutral = neutral
    let newTotal = total
    setNeutral(newCountNeutral += 1)
    setTotal(newTotal += 1)
  }

  const addBad = () => {
    let newCountBad = bad
    let newTotal = total
    let newAverage = average
    setBad(newCountBad += 1)
    setTotal(newTotal += 1)
    setAverage(newAverage -= 1)
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
      <Display text='total' count={total}/>
      <Display text='average' count={totalAverage ? totalAverage : 0}/>
      <Display text='positive' count={positiveAverage ? positiveAverage : 0}/>
    </>
  )
}

export default App
