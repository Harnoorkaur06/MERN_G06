// ES6 features==> Ecmascript 6==>2015

// let const, arrow func, template literals, destructing, spreaad, rest operators, default parameters

// template literals

// // before es6 features => template literal
// console.log("my name is"+name+ "And age is "+age)
// // required too many plus signs to call variables

// console.log(`My name is ${name} and age is ${age}`) //after es6

// // obj deconstructing
// let obj={
//     moviename:"avatar",
//     rating:4.8
// }
// console.log(obj.moviename)
// let {moviename,rating}=obj
// console.log(rating)

// // Array deconstructing
// let arr=[10,20,30]
// let [a,b]=arr
// console.log(a,b) //10,20

// Spread Operator(...)
// --> copies all or part of an existing array or object into another array or object

// let arr1=[10,20,30] //101
// let arr2=arr1 //101
// arr2.push(90)
// console.log(arr1) //[10,20,30,90]
// console.log(arr2) //[10,20,30,90]

// let arr3=[40,50,60] //101
// let arr4=[...arr3]  //201
// arr4.push(70)
// console.log(arr3) //[40,50,60]
// console.log(arr4) //[40,50,60,70]

// // combining arrays through spread

// let fruits=["apple","mango"]
// let vegetable=["potato","tomato"]
// let food=[...fruits,...vegetable]

// console.log(food)


// let user={
//     name:"Aman",
//     age: 25
// }
// let newuser={
//     ...user,
//     city: "Shimla"
// }
// console.log(newuser)

// let todo={
//     title:"Learn React",
//     status:false
// }
// let updatedtodo={
//     ...todo,
//     status:true
// }
// console.log(updatedtodo)

// // order matters in spread operator
// let todo={
//     title:"Learn React",
//     status:false
// }
// let updatedtodo={
//     status:true,
//     ...todo
// }
// console.log(updatedtodo)

// Rest Operator(...)
// --> values and properties will pack here

// function calculateSum(a,...num){
//     console.log(a)
//     console.log(num)
// }
// calculateSum(10,20,30,40,50,60)

// spread ==> to unpack values
// rest ==> to pack values

// Default parameter
function nationality(country="india"){
    console.log(`this person belong to ${country}`)
}
nationality()
nationality("America")