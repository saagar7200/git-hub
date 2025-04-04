
// syntax

// function functionName (){
//     // body
//     console.log('Good morning')
// }

// functionName()

// function declaration (Named Function)

// greet1()

// function greet1 (){
//     console.log('Good morning')
// }


// function expression (anonymous)

// const  greet = function (){
//     console.log('Good morning')
// }
// greet()

// parameter & arguments  

// var name ='Alice'

// const  greet = function ({name = 'Guest',age}){
//     console.log('Good morning ',name )
//     console.log('You are ',age)
// }

// greet({age:10,name:'Alice'})
// greet()


// function({a,b,c,d})


// return type






// arrow function

// const Add = (a,b) => {
//     return a +b

// }

// const add = (a,b) => a + b

// const sum = add(10,4)

// console.log(sum)




// higher order function


// const greet = (name , x) => {
//     console.log('Good morning ',name)
//     x(name)
// }

// const goodBye = (name) =>{
//     console.log('Good bye!!!! ',name)
// }


// const sayHello = (name) =>{
//     console.log('Hello ',name)
// }

// greet('alice',goodBye)

// greet('Bob',sayHello)


// return a function
const add = function  (a) {
    return function (b){
            return a + b
    }

}

// const add5 = add(5)
// console.log(add5(10))
// console.log(add5(20))

// const add10 = add(10)

// console.log(add10(30))




// const add1 =   (a) => {
//     let x =19
//     return function (b){
//             return a + b
//     }

// }

  const exponent = a => b => b ** a


  export const cube = exponent(3)

console.log(cube(2))