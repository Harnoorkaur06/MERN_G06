// require is used for importing a module
// export is used for exporting module

// const calc=require("./math")

// const {add,multiply}=require("./math")
// // console.log(calc.add(15,32))
// console.log(multiply(32,4))

// const {msg}=require("./greet")
// console.log(msg())

import {msg} from "./greet.js"
console.log(msg())