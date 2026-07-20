// undefined, null, nan,0,"", false--> falsy values

// Type conversions

// implicit
// console.log("5"+5) // automatically 5 will be converted into number

// // explicit
// let num=10;
// let strnum=String(num)
// console.log(typeof(num))
// console.log(typeof(strnum))


// let str="123" //string
// let number=Number(str) //number
//         // Or 
// let number=+(str) //number
// console.log(typeof(number)) //number


// let s="true"
// console.log(typeof(Boolean(s))) //boolean

// let curr='400 Rs.' //string
// console.log(parseInt(curr)) //400

// let c='Rs. 400' //string
// console.log(parseInt(c)) //Nan

// let z=false||0||null
// console.log(z) // if all vaules are false in or statement then ull get last falsy value

// let z=false ||'vivek'||'rishi'
// console.log(z) //vivek

// let z='prachi' && 'vivek' && 'rishi'
// console.log(z) //if all values are truthy then && will return last value

// undefined or null
// let user="Hello"
// console.log(user ?? "The value is not defined")


const subjects=['js','html','css']

for(let subject of subjects){
    console.log(subject)
}
