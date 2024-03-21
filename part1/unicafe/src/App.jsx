import { useState } from "react"
import { Button } from "./components/Button"
import { Display } from "./components/Display"
import { Statistics } from "./components/Statistics"

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
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        totalAverage={totalAverage}
        positiveAverage={positiveAverage}
      />
    </>
  )
}

export default App
