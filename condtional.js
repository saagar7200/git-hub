
// // if
// // if..else
// // if ..else if .. else

// console.log('start')

// // const isMorning = false

// // if(isMorning){
// //     console.log('good morning')
    

// // }else{
    
// //     console.log('good afternoon')
// // }

// // a < 18
// // minor
// // a >18 <55
// // adult 
// // >55 
// // major


// // const age = 55


// // if(age < 18){
// //     console.log('Minor')
// // }else if(age >= 18 && age < 55){
// //     console.log('Adult')
// // }
// // else{
// //     console.log('Major')
// // // }







// // // switch case

// // const day = 4

// // switch(day){
// //     case 1 :
// //         console.log('Sunday')
// //         break ;
// //     case 2:
// //         console.log('Monday')
// //         break ;
// //     case 3:
// //     case 4:
// //     case 5:
// //         console.log('Tuesday')
// //         break ;
    
// //     default :
// //         console.log('Please enter day between 1-3')
// // }




// // function (day)
// // switch (day)
// // day 1,7/ sunday ,sat -> weekend
// // 6 -> weekend is near 
// // 2 -> wrk day start
// // work day

const checkWeekEnd = (day) => {
    switch(day){
        case 1:
        case 7:
            console.log('weekend')
            break;
        case 2:
            console.log("work day start")
            break;
        case 6: 
            console.log('weekend is near')
            break;
        case 3:
        case 4:
        case 5:
            console.log('work day')

    }

}


checkWeekEnd(7)




console.log('end')



// loops

// for(let i = 10 ; i >=0 ; i--){

//     if(i % 2 !== 0){
//         break;
//     }


//     console.log(i)

// }

// console.log('end')


// while

let count = 40

while( count > 0){
    // console.log(count)
    count--

}


do{
    console.log(count)
    count++

}while( count <= 40)






// for in 

const person = {
    name:'John',
    age:20,
    isStudent:false
}

// for(let key in person){

//     console.log(key,':',person[key])

// }


// for of

const colors = ['red','black','white']

// for(let color of colors){
//     console.log(color)

// }


// const [a,b,c,d] = 'name'
// console.log(a,b,c,d)



// for(let key of 'hello' ){
//     console.log(key)

// }







