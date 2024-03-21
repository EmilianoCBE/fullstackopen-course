import { Display } from './Display'

export const Statistics = ({good, neutral, bad, total, totalAverage, positiveAverage}) => {
  return (
    <>
      {
        good||neutral||bad ? 
          <div>
            <h1>statistics</h1>
            <Display text='good' count={good}/>
            <Display text='neutral' count={neutral}/>
            <Display text='bad' count={bad}/>
            <Display text='total' count={total}/>
            <Display text='average' count={totalAverage ? totalAverage : 0}/>
            <Display text='positive' count={positiveAverage ? positiveAverage : 0}/>
          </div>
          : <div>No feedback given</div>
        
      }
      
    </>
  )
}
