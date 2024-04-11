import { Content } from "./Contents"
import { Header } from "./Header"
import { Total } from "./Total"


export const Course = ({courses}) => {

  return (
    <>
      {
        courses.map(course => (
          <div key={course.id}>
            <Header title={course.name}/>
            <Content parts={course.parts}/>
            <Total totalParts={course.parts}/> 
          </div>
        ))
      }
    </>
  )
}
