// let status = true
// const promise1=new Promise(function(resolve,reject){
//     if(status){
//         resolve("keeps his word")
//     }else{
//         reject("doesn't keep his word")
//     }
// })

// console.log(promise1)


//demo example for .then errorhandler and .catch
// const promiseDemo = new Promise(function(resolve,reject){
//     // setTimeout(()=>resolve("done!"),3000)
//     setTimeout(()=>reject("whoops!"),3000)
//     }
// )
// // promiseDemo.then((data)=>console.log(data), (error)=>console.log(error))
// promiseDemo.then((data)=>console.log(data)).catch((error)=>console.log(error))

//demo: how async await works
// function first(){
//     return new Promise((resolve,reject) =>{
//     setTimeout(()=>resolve("done"),2000)
//     // resolve("done")
//     })
// }
//     async function f(){
//     console.log("execution started")
//     let response = await first();
//     console.log(response)
//     console.log("execution completed")
//     }
    
//     f();
//     console.log("still in progress")

// function fetchUser(userId) {
//     fetch("https://api.example.com/users/${userId}").then((data) =>
//     console.log(`${data.first_name} ${data.last_name}`))
    
//     }
//     fetchUser("bummi")


//own fake fetch async function
const fakeFetch = (msg,flag) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(flag){
            //resolve("the promise is resolved:" ,msg) //msg will not be displayed  //resolve and reject only takes one argument, if passed multiple then others are ignored 
            resolve(`the promise is resolved: ${msg}`)
        }else{
            reject(`error from server: ${msg}`)
        }
    },3000)
    })
}
fakeFetch("bhumika",true).then((date)=>console.log(date)).catch((error)=>console.log(error))