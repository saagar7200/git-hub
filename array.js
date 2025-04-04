
// []
// new Array
// let num1 = 1


// const numbers = [1,2,3,4,5,6,10,20,40]
// const person = {}
// numbers.push(30)
// length = 8
// lastIndex= 7

// const arr = new Array()

// console.log(numbers,arr)

// const first = numbers[1]
// console.log(first)

// console.log(numbers.length)


// add 
// numbers.push(20)


// numbers.unshift(0)

// console.log(numbers)


// get

// const last = numbers.pop()
// console.log(last)


// const first = numbers.shift()
// console.log(first)

// console.log(numbers)

// const last = numbers.pop()
// numbers.push(100)
// console.log(numbers)
// const last = numbers[numbers.length - 1]
// console.log(last)


// const index = numbers.indexOf(100)



// console.log(index)

// console.log(numbers[numbers.length-1])

// console.log(numbers.at(-1))

//  const newArr = numbers.slice(2,5)
//  console.log(newArr)


// numbers.findIndex(()=>{

// })



// console.log( Array.isArray(person))

// console.log(numbers instanceof Array)


// array method



// const numbers = [1,2,20,30,5,6,1]
// const num = ()

// adding and removing elements
// pop -> removing el from last index
// shift -> removing from first index
// push -> adding ele to last index
// unshift ->  adding el to first index
// slice -> slice part of array
// at -> get element of passed index form array


// loop
// foreach

// const newArr = []
// function func (num,index,arr){
//     // console.log(num *2)
//     newArr[index] = num * 2

// }

// numbers.forEach(func)


// modify

// const doubled =  numbers.map(function(number){
//      return number *2
// })


// const even = numbers.filter(number => number % 2 === 0)


// console.log(even)

// console.log(numbers)


// const isEvenExists = numbers.some((num) => num % 2 === 0)

// console.log(isEvenExists)


// const isEveryEven = numbers.every((num) => num % 2 === 0)

// console.log(isEveryEven)


// reduce

// const total = numbers.reduce((acc,number) =>{
//    return acc +=  number;
// },0)

// console.log(total)




// const val =  numbers.find((num) => num > 10)


// console.log(val)



// console.log(numbers.findIndex((num) => num > 10))

// const numbers = [1,2,20,30,5,6]




// Array.splice(start_index,delete_count,......item)

// console.log(numbers)

// numbers.splice(1,3,4,50,100)



// numbers.splice(3,0,25)


// console.log(numbers.concat([67,45]))
// console.log(numbers.toString())
// console.log(numbers.join('-'))
// console.log(numbers)


// sorting

// const numbers = [1,2,20,10,5,6]
// const strings = ['Alice',"Charlie","Jim",'Bob']

// console.log(numbers.flat())

// strings.sort()

// console.log(strings)


// numbers.sort((a,b)=> a-b)

// negative  ->  so swap
// +ve -> swap b ,a
// 0 no swap

// console.log(numbers)

// numbers.sort((a,b)=> b -a)

// console.log(numbers)

const students = [
    {
        name:'Alice',
        grade:10,
        score:68
    },
    {
        name:'Sam',
        grade:11,
        score:98
    },
    {
        name:'Bob',
        grade:12,
        score:45
    },
    {
        name:'Jim',
        grade:9,
        score:55
    },
]


const numbers = [1,2,3]
const even =  numbers.filter((value)=> {
    return value % 2  === 0

})
console.log(even)

const filteredStudents = students.filter((value)=>{
    return value.score > 50

})




const student = {
    name:'Alice',
    grade:10,
    score:68
}

// console.log(students[1].score)


// filter score > 50

// avgScore





// transformation / mapping result to required result format
// sort


// [
//     "Sam - (Grade - 11) - 98",
//     'Alice - (Grade - 10) - 68'
// ]


// const result  = students.filter(function(student){

//     return student.score > 50

// })
// .sort((a,b) =>  b.score-a.score)
// .map(s => `${s.name} - ( Grade-${s.grade} ) - ${s.score}`)


// console.log(result)


// const filteredArray  = students.filter(function(student){

//     return student.score > 50

// })



// console.log(result)

// const result = filterdStudents

// console.log(result)













// const numbers = [1,2,20,10,5,6] 
// const mappedArr = numbers.map(num => num > 10 ? '#' : num)

// console.log(numbers)
// console.log(mappedArr)































