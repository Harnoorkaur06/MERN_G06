

const express=require("express")
const app=express() //connecting express with application
const fs=require("fs")
app.use(express.json()) //this will tell express explicitly that client is sending json data

app.get("/",(req,res)=>{
    res.send("welcome to homepage")
})

app.get("/users",(req,res)=>{
    // we will create one file from which we will fetch users data
    const data=fs.readFileSync("db.json","utf-8") //readfile-->welcome command will run
    // but in readfilesync first file will be read then "welcome to user"
    // res.send("welcome to users page")
    const js_objects=JSON.parse(data)
    res.send(js_objects) //only one response can be sent ...no multiple response
})

app.post("/users",(req,res)=>{
    const data=fs.readFileSync("db.json","utf-8")
    const js_objects=JSON.parse(data)
    console.log(js_objects)
    const newUser=req.body
    console.log(newUser)
    res.send("making post request")

})

app.listen(8000,()=>{
    console.log("server started in http://localhost:8000")
})
