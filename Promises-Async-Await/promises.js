let status = true
const promise1=new Promise(function(resolve,reject){
    if(status){
        resolve("keeps his word")
    }else{
        reject("doesn't keep his word")
    }
})

console.log(promise1)