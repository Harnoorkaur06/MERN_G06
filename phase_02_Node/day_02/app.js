// Event loop --->
//     it is a mechanism which constantly checks whether 
//     call stack is empty or not, if it is empty then its task is to move all callbacks
//     in call stack from queue

// global execution context ------
//                                |--> synchronys
// function execution context-----

console.log("start")

fetch("https://dummyjson.com/products").then((res)=>{
    return res.json()
}).then((data)=>console.log(data))

setTimeout(()=>{
    console.log("Executing after 3 second")
},3000)
console.log("End")

// microtask queue--> fetch, api
// callback queue--> setTimeout, setInterval