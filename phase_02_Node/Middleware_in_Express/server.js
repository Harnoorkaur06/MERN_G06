const express=require("express")
const app=express()

// Middleware--> is a func which runs between req and res 
// client(req)==> middleware[validates req]==>res
// client(req)==> middleware[not validate req]==>send back to client

// eg --> 
// student entering uni==> security guard k pass==> she can enter uni 
// after validating by security guard

app.use(express.json())
//express cant decide which data is coming from client, it
// confuses btw json data, text data,file data,etc, so
// we need to mention that incoming data will be json data only 

const validateData=(req,res,next)=>{
    const {email,password}=req.body
    console.log(email,password)
    if(!email.includes("@") || !email.endsWith(".com")){
        res.status(400).send("input credentials are not valid")
    }else{
        console.log("validation middleware is running")
        next() // it will allow to pass req to next middleware
        // if next middleware is not present then its passed to next route
    }
    
}
const authData=(req,res,next)=>{
    console.log("Auth wala middleware is running")
    next()
}
// app.use(validateData) //order 1 // validation middleware is running
// app.use(authData) //order 2 // Auth wala middleware is running
app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

// client==>req==> middleware==>next()==>req will pass to "/"

app.get("/profile",validateData,authData,(req,res)=>{
    res.send("welcome to my profile page")
})


app.listen(8000,()=>{
    console.log("server is running in http://localhost:8000")
})