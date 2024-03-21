import { StatisticLine } from './StatisticLine'

export const Statistics = ({good, neutral, bad, total, totalAverage, positiveAverage}) => {
  return (
    <>
      {
        good||neutral||bad ? 
          <div>
            <h1>statistics</h1>
            <StatisticLine text='good' count={good}/>
            <StatisticLine text='neutral' count={neutral}/>
            <StatisticLine text='bad' count={bad}/>
            <StatisticLine text='total' count={total}/>
            <StatisticLine text='average' count={totalAverage ? totalAverage : 0}/>
            <StatisticLine text='positive' count={positiveAverage ? positiveAverage : 0}/>
          </div>
          : <div>No feedback given</div>
        
      }
      
    </>
  )
}
