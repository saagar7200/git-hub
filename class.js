
// // const personA = {
// //     name:'a',
// //     age:20,
// //     greet (){
// //         console.log('hello')
// //     }
// // }


// class Person {
//     name;
//     #age;
//     constructor(name,age){
//         this.name = name;
//         this.#age = age;

//     }
//     greet(){
//         console.log("hello from ",this.name)
//     }

//     sayHello (){
//         console.log('Good morning')
//     }
//     getAge (){
//         return this.#age
//     }
// }

// class Student extends Person {
//     grade;
//     constructor(name,age,grade){
//         super(name,age)
//         this.grade = grade;

//     }
//     greet(){
//         console.log("hello from student",this.name)
//     }

   
// }



// const personA = new Person('person a',20)
// const student = new Student('student',20 ,12)
// // const personC = new Person('person c',20)
// // console.log(personA,student)
// personA.greet()
// student.greet()
// console.log(personA.getAge())


// // this



// // const person = {
// //     name:'a',
// //     age:20,
// //     greet (){
// //        const arrow =  () => {
// //             console.log('hello from ',this)
// //         }
// //         arrow()
// //     }
// // }

// // person.greet()



// task 
// class -> Account
// acc holder name, amount
// amount -> private
// amount -> withdraw, query, deposit 

// constructor function
function Person(name,age){
    this.name = name;
    this.age = age;
}

const person = new Person('sagar',10)

console.log(person)

class Account  {
     #amount = 0
     account_holder_name;

     constructor(amount,account_holder_name){
       
         if(amount <= 0){
             console.log('amount should be greater than 0')
             return
            }
            this.#amount = amount;
            this.account_holder_name=account_holder_name
     }


     deposit(amount){
        if(amount <= 0){
            console.log('amount should be greater than 0')
            return
        }
        this.#amount += amount

    }

    withdraw (amount){
        if(amount <= 0){
            console.log('amount should be greater than 0')
            return
        }
        if(amount > this.#amount){
            console.log("insufficient balance")

        }
        this.#amount -= amount
    }

    getAmount(){
        console.log(`Available balance is ${this.#amount}`)
    }

}


const account = new Account(1000,'sagar')

account.withdraw(500)
account.deposit(2000)
account.getAmount()

