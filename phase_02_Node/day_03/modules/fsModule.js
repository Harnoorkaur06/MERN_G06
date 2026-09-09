const fs=require("fs")
// fs module will allow u to work on file
//  do multiple operations like read, create, delete, append

// ----------------------------------------------------------
// File read operation
// const data=fs.readFileSync()
// readFileSync()==> read file synchronously
// console.log("start")

// const data=fs.readFileSync("./students.txt","utf-8")
// console.log(data)
// // console.log(data.toString()) //if u want to skip utf-8

// console.log("start")
// fs.readFile("./students.txt","utf-8",(err,data)=>{ //accepts callback
//     if(err){
//         return console.log("Error: ",err)
//     }
//     console.log(data)
// })
// console.log("End")

// -----------------------------------------------------------------
// write file operation

// const text="welcome to nightingale"
// fs.writeFile("./hostel.txt",text,(err)=>{
//     if(err){console.log(err)}
//     else{
//         console.log("data saved")
//     }
// })
// -------------------------------------------------------------------
// append file operation
// const text="\nhave a enjoyable day ahead!!"
// fs.appendFile("./hostel.txt",text,(err)=>{
//     if(err){console.log(err)}
//     else{
//         console.log("data saved")
//     }
// })
// -----------------------------------------------------------------
// delete file operation

// fs.unlink("./hostel.txt",(err)=>{
//     if(err){console.log(err)}
//     else{
//         console.log("data deleted")
//     }
// })
// --------------------------------------------------------------------

// make directory operation
// fs.mkdir("college",(err)=>{
//     if(err){console.log(err)}
//     else{
//         console.log("folder created")
//     }
// })

fs.readdir("college",(err,files)=>{ //read files in the folder
    if(err){console.log(err)}
    else{
        console.log(files)
    }
})