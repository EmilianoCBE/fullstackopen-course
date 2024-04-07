export const Total = ({totalParts}) => {

  const total = totalParts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <>
      <p>Number of exercises: {total}</p>
    </>
  )
} 