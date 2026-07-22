                    // functions

// function sumcal(a,b){
//     return a+b
// }
// console.log(sumcal(10,6))

// -------------------------------------------------------------------------------------

                                        // Func expression

// let, const-->TDZ

// let x=function(a){
//     return a**2
// }

// console.log(x(5))


// let checkNationality=function(country="Japan"){ //default parameter
//     return `This person has ${country} nationality`
// }

// let res=checkNationality("American") //if nothing passed here it will show default value, else it will overlap default value and give passed value as ans
// console.log(res) //This person has American nationality 

// -------------------------------------------------------------------------------------

// Arrow functions

// let x=(a)=>a%2==0;// no need of return for single line functions
// console.log(x(7))

// let res=(a,b)=>{
//     let c=10
//     return (a+b)-c
// }
// console.log(res(20,5))