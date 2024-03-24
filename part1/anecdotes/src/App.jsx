import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  // const votesArray = [0, 0, 0, 0, 0 ,0 ,0 ,0]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  })

  const handleClick = () => {
    const maxNumberAnecdote = 7
    let newSelected = Math.round(Math.random() * maxNumberAnecdote)
    setSelected(newSelected)
  }

  const handleVote = () => {
    const copyVotes = {...votes}
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <div style={{display: 'flex', gap: '8px'}}>
        <button onClick={handleVote} style={{width: '50px'}}>
          Vote
        </button>
        <button onClick={handleClick} style={{width: '150px'}}>
          Change anecdote
        </button>
      </div>
    </div>
  )
}

export default App