                                 // Object

// let name="aman"
// let age=27
// let address="shimla"

// instead use object 

// let person={
//     name:"Aman", //here name is key or property
//     age:"27",
//     marks:[30,89,90]

// }
// console.log(person.age) //accesing through dot method
// console.log(person['age']) //accesing through square brackets

// ----------------------------------------------------------------------------------------
// creating object by using object constructor method

// let student=new Object()
// student['name']="Yogesh"
// student['dob']='29-07-1998' //add properties in object
// student['dob']='01-07-1998' //updating value in object
// console.log(student)

// -----------------------------------------------------------------------------------------
// traversing in object

// for(let key in student){
//     console.log('Key',key)
//     console.log('Value',student[key])
// }

// console.log(Object.keys(student)) //array of keys
// console.log(Object.values(student)) //array of values

// --------------------------------------------------------------------------------------------
// methods

// let obj={model:"Tesla", color:"Red"};
// delete obj.color;
// console.log(obj);

// let obj={model:"Tesla"}
// console.log("color" in obj); //false
// console.log(obj.hasOwnProperty("model")) //true

// let obj={name:"Sourav",age:23}
// console.log(Object.keys(obj).length)

// let student={
//     name:"Rahul",
//     age:21,
//     address:{
//         city:"asr",
//         state:"delhi"
//     }
// }
// console.log(student.address.state) 
// console.log(student.address['state']) 
 
// let student={
//     name:"Rahul",
//     age:21,
//     city:"asr",
        
// }

// let {name,age,city}=student //Destructuring of object
// console.log(name) //rahul
// console.log(age) //21

let student={
    name:"Rahul",
    age:21,
    city:"asr",
    id:{
        adhaar:"5689 xxxx xxxx xxxx",
        pan:"hjep5670x"
    }
}
let {name,age,city,id:{adhaar,pan}}=student 
console.log(pan) 

