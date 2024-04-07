import { Content } from "./Contents"
import { Header } from "./Header"
import { Total } from "./Total"


export const Course = ({course}) => {

  const total = course.parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return (
    <div>
      <Header title={course.name}/>
      <Content 
        part1={course.parts[0].name}
        part2={course.parts[1].name}
        part3={course.parts[2].name} 
        exercises1={course.parts[0].exercises}
        exercises2={course.parts[1].exercises}
        exercises3={course.parts[2].exercises}
      />
      <Total total={total}/>
    </div>
  )
}
