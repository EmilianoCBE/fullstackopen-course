const Hello = ({name, age}) => {

  console.log({name, age})
  return (
    <div>
      <p>

        Hello {name}, you are {age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {

  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>

      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

export default App