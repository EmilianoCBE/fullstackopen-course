//! VARIABLES

const x = 1
let y = 5

console.log(x, y)   // se imprime 1, 5
y += 10
console.log(x, y)   // se imprime 1, 15
y = 'sometext'
console.log(x, y)   // se imprime 1, sometext
x = 4               // provoca un error

//! ARRAYS

const t = [1, -1, 3]

t.push(5)

console.log(t.length) // se imprime 4
console.log(t[1])     // se imprime -1

t.forEach(value => {
  console.log(value)  // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
})     

const t1 = [1, -1, 3]

const t2 = t.concat(5) // crea un nuevo array

console.log(t1)  // se imprime [1, -1, 3]
console.log(t2) // se imprime [1, -1, 3, 5]

const t3 = [1, 2, 3] 

const m1 = t3.map(value => value * 2) 
console.log(m1) // se imprime [2, 4, 6]

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// se imprime [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

const t4 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t4

console.log(first, second)  // se imprime 1, 2
console.log(rest)          // se imprime [3, 4 ,5]

//! OBJETOS

const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object1.name)         // se imprime Arto Hellas
const fieldName = 'age' 
console.log(object1[fieldName])    // se imprime 35

object1.address = 'Helsinki'
object1['secret number'] = 12341

//! FUNCIONES

const sum = (p1, p2) => { 
  console.log (p1) 
  console.log (p2) 
  return p1 + p2 
} 

const result = sum(1, 5)
console.log (result)

const square = p => {
  console.log(p)
  return p * p
}

const square2 = p => p * p

const t5 = [1, 2, 3]
const tSquared = t5.map(p => p * p)
// tSquared ahora es [1, 4, 9]

function product(a, b) {
  return a * b
}

const result2 = product(2, 6)
// result ahora es 12

//! MÉTODOS DE OBJETO Y "this"

const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddition: function(a, b) {
    console.log(a + b)
  },
}

arto.growOlder = function() {
  this.age += 1
}

console.log(arto.age)   // se imprime 35
arto.growOlder()
console.log(arto.age)   // se imprime 36

arto.doAddition(1, 4)        // se imprime 5

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)   // se imprime 25

arto.greet()       // se imprime "hello, my name is Arto Hellas"

const referenceToGreet = arto.greet
referenceToGreet() // se imprime "hello, my name is undefined"

const arto2 = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

setTimeout(arto2.greet, 1000)

setTimeout(arto2.greet.bind(arto), 1000)

//! CLASES

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 23)
janja.greet()