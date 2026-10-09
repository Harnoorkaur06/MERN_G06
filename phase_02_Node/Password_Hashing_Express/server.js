const express=require("express")
const app=express()
const bcrypt=require("bcrypt")

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

let user={} //temporary database
app.post("/register",async(req,res)=>{
    // if await-async not used output will be -->
    // {"username":"aman@gmail.com","userpassword":{}} is registered successfully
    const {email,password}=req.body
    user={
        useremail:email,
        userpassword:await bcrypt.hash(password,10)
        //bcrypt.hash(original_password,salt rounds)
        // salt rounds-->decides complexity of password
        // -------------> if salt rounds=10 ==> ur pass is strong complex
        // -------------> if 1 ==> ur pass is less complex
    }
    res.send(`${JSON.stringify(user)} is registered successfully`)
})

// == =>lhs==rhs
// == --> 123 =="123"-->true
// === --> 123 =="123"-->false

app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    if(email!=user.useremail){
        res.send("User email does not exists")
    }
    const check_password= await bcrypt.compare(password,user.userpassword)
    if(!check_password){
        res.send("password does not match")
    }else{
        res.send("User logged in successfully")
    }
})

app.listen(8000,()=>{
    console.log("server is running in http://localhost:8000/")
})