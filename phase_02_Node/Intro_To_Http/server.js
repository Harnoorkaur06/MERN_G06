
const http=require("http") 
//https module allow u to provide path and methods over server

const server=http.createServer((req,res)=>{
    // res.write("This is write method")
    // res.write("This is second line")
    // res.end("Welcome to First Server Application")
    // res.write("This is after end line") //after end no response comes

    if(req.url=="/"){
        res.end("welcome to home page")
    }
    else if(req.url=="/about"){
        res.end("welcome to about page")
    }
    else if(req.url=="/products"){
        res.end("welcome to products page")
    }
    else if(req.url=="/login"){
        res.end("welcome to login page")
    }
})

server.listen(8000,()=>{
    console.log("Server started on http://localhost:8000/")
})


