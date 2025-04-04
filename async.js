
// // // // // console.log('start')
// // // // // for(let i = 0 ; i<=5;i++){
// // // // //     console.log(i)
// // // // // }

// // // // // const timerId =  setTimeout((name,age)=>{
// // // // //     console.log('processing....',name,age)
// // // // // },2000,'John',20)

// // // // // console.log(timerId)

// // // // // clearTimeout(timerId)
// // // // // console.log(timerId)


// // // // // console.log('end')

// // // // // let count = 0
// // // // // const timerId =  setInterval(()=>{

// // // // //     console.log(count++)
// // // // //     if(count === 10){
// // // // //         clearInterval(timerId)
// // // // //     }
// // // // // },1000)


// // // // // callback

// // // // function first (callback){
// // // //     setTimeout(()=>{
// // // //         console.log('User fetched');
// // // //         callback(['john'],'error fetching user')
// // // //     },2000)

// // // // }

// // // // function second (callback){
// // // //     setTimeout(()=>{
// // // //         console.log('Post fetched');
// // // //         callback()
// // // //     },1000)

// // // // }

// // // // function third (callback){
// // // //     setTimeout(()=>{
// // // //         console.log('Comments fetched');
// // // //         callback()
// // // //     },1000)

// // // // }

// // // // function last (){
// // // //     setTimeout(()=>{
// // // //         console.log('Task complete..');
// // // //     },1000)

// // // // }

// // // first(()=>{})
// // // second(()=>{})


// // // first((data,error)=>{
// // //     if(error){
// // //         console.log(error)
// // //         return
// // //     }
// // //     second((data,error)=>{
// // //         if(error){
// // //             console.log(error)
// // //             return
// // //         }
// // //         third((data,error)=>{
// // //             if(error){
// // //                 console.log(error)
// // //                 return
// // //             }
// // //             last()
// // //         })
// // //     })
// // // })


// // // // promise
// // // console.log('start')

// // // // const promise = new Promise((resolve,reject)=>{
// // // //     let success = false
// // // //      setTimeout(()=>{
// // // //         if(success){
// // // //             resolve('Task Completed')
// // // //         }else{
// // // //             reject('Task failed')
// // // //         }

// // // //      },2000)

// // // // })

// // // // let loading = true
// // // // // console.log(promise)
// // // // promise.then((data)=>{
// // // //     console.log(data)
// // // //     return data

// // // // }).then((user)=>{
// // // //     // getComputedStyle(user.id)
// // // //     console.log('user',user)
// // // //     // loading =false
// // // // }).catch((error) => console.log('error occured',error))
// // // // .finally(()=>console.log('finally'))


// // // // async/await 

// // // function fetchData (){
// // //   return new Promise((resolve,reject)=>{
// // //     let success = false
// // //      setTimeout(()=>{
// // //         if(success){
// // //             resolve('Task Completed')
// // //         }else{
// // //             reject('Task failed')
// // //         }

// // //      },2000)

// // // })
// // // }

// // // // fetchData().then().catch()


// // // const fetchUser = async () =>{
// // //  try{
// // //     const res = await fetchData()

// // //  console.log(res)
// // //  }catch(err){
// // //     console.log('catch',err)
// // //  }finally{
// // //     console.log('finally')
// // //  }
// // // }


// // // fetchUser()


// // // console.log('end')




// // function first (){
// //   return new Promise((resolve,reject)=>{
// //       setTimeout(()=>{
// //          const success = false
// //          if(success){
// //             resolve('first data loaded')
// //          }else{
// //             reject('Data loading failed')
// //          }    
   
// //       },2000)
   
// //    })
// // }
// // function second (data){
// //    console.log('first res from second func',data)
// //    return new Promise((resolve,reject)=>{
// //        setTimeout(()=>{
// //           const success = false
// //           if(success){
// //              resolve('second data loaded')
// //           }else{
// //              reject('Data loading failed second')
// //           }    
    
// //        },2000)
    
// //     })
// //  }

// //  first().then((data) => {
// //    return second(data)
// //  }).then((data) => console.log(data)).catch((err) => console.log(err))



// // promise

// // const getData = () =>{
// //    fetch('https://jsonplaceholder.typicode.com/todo')
// //    .then((response) => {
// //       console.log(response.ok)
// //       if(!response.ok){
// //          throw new Error('Something went wrong')
// //       }
// //       return response.json()
// //    })
// //    .then(data => console.log(data))
// //    .catch((err)=>console.log(err.message))
// // }

// // getData()


// // async await

// const getData = async () =>{
//   try {
//    const response = await fetch('https://jsonplaceholder.typicode.com/posts/84')
//    if(!response.ok){
//                throw new Error('Something went wrong')
//    }
//    const data = await response.json()
//    console.log(data)   
//   } catch (error) {
//    console.log(error)
   
//   }
// }

// getData()