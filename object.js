// non primitive 

// objects


// template literal
// {}


// const car = {}
// // const obj = new Object()
// console.log(car)

// // car.model = 'swift'
// // car.model = "i10"
// console.log(car)



// get 

// console.log(person['person address'])
// console.log(person["name"])


// person.name = 'John'








// const person = {
//     firstName:'John',
//     age:20,
//     address:{
//         city:'ktm',
//         postal:'44600',
        
//     },
//     greet(){
//         console.log("Hello, Good morning ")
//     },
    
// }


// let  personName = 'John'
// let personAge = 20


// get 

// console.log(person.greet())
// console.log(person.address.city)


// console.log(person['age'])


// update

// person.firstName = 'Sagar'

// person.address.city = 'pokhara'

// console.log(person)
// console.log(person.address.city)

// person.lastName = 'Bhandari'

// person.address.street = '123'

// console.log(person)

// // delete

// delete person.firstName


// console.log(person)



// new keyword

// const obj = new Object()

// obj.name = 'sagar'



// console.log( obj.name)




// const person = {
//     firstName:'John',
//     age:20,
//     address:{
//         city:'ktm',
//         postal:'44600',
        
//     }   
// }

// const person2 = person


// person2.firstName = 'Sagar'

// console.log(person,person2)


// let x = 10
// let y = x;
// y = 20

// console.log(x,y)


// const person = {
//         firstName:'John',
//         age:20,  
// }




// const keys =  Object.keys(person)

// console.log(keys)


// const values = Object.values(person)

// console.log(values)


// const entries = Object.entries(person)

// console.log(entries)


// const person = {
//     firstName:'John',
//     age:20,  
// }

// const obj = {
//     lastName : 'Bhandari'
// }

// const person2 = Object.assign({},person,obj)


// person2.firstName = 'Sagar'

// console.log(person,person2)

// Object.freeze(person)

// Object.seal(person)

// delete person.age
// person.firstName = "update"

// person.lastName = 'hello'

// console.log(person)






// book 
// author
// pages
// edition
// id




// 


// const book = {
//     author:'Jhon',
//     pages:100,
//     edition:'4th',
//     id:1,
// }

// get
// dot notation
// console.log(book.author)

// // bracket notation

// console.log(book['pages'])

// let key = 'pages'
// console.log(key)

// console.log(book[key])

// modify
// book[key] = 200

// book['isPublished'] = true


// delete book.id

// console.log(book)



// console.log(Object.entries(book))


// console.log(book.isPublished )












// get
// dot notation
// const bookAuthor = book.author
// bracket []
// const edition= book["edition"]
// console.log(bookAuthor,edition)

// update

// console.log(book.pages) //100

// book.pages = 200

// console.log(book.pages) //200

// add new properties

// book.published = true

// console.log(book)


// delete 

// delete book.pages

// console.log(book)


// methods

// keys

//  const keys = Object.keys(book)
//  const values = Object.values(book)
//  const entries = Object.entries(book)


//  console.log(keys)
//  console.log(values) 
//  console.log(entries)




// let  x =10

// let y = x
// y =20

// console.log(x,y)

// const page = {
//     pages:200
// }


// const book2 = Object.assign({},book,page)

// book2.author = 'Harry'
// book2.edition = '1st'

// console.log(book2,book)




// 
//  {} 
// new Object()


// const obj = new Object()


// const person = {
//     name : 'John',
//     age : 20,
//     job :'Developer',
// }
// const person2 = {
//     name : 'John',
//     age : 20,
//     job :'Developer',
// }

// console.log(person === person2)

// get

// let key = 'age'
// console.log(person[key])
// // 
// console.log(person["job"])

// console.log(person.greet())


// modify

// person.name = 'Sagar'
// person.address = '123 street'

// delete



// delete person.job





// let keys = Object.keys(person)
// let values = Object.values(person)

// const key_val = Object.entries(person)



// console.log(keys)
// console.log(key_val)


// const newObj = Object.assign({},person)

// // const newObj = person

// // newObj.name = 'Sagar'

// console.log(person)

// console.log(newObj)







