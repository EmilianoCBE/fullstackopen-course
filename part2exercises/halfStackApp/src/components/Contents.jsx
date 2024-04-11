import { Part } from "./Part"

export const Content = ({parts}) => {
  return (
    <>
      {
        parts.map((part) => (
          <Part key={part.id} partName={part.name} partExercises={part.exercises}/>
        ))
      }
    </>
  )
}