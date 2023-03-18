const delayedAlert = (msg,time) =>{
    setTimeout(() =>{
        console.log(msg)
    }, 2000)
}


delayedAlert('Hello, world!', 2000);