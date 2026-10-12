const express=require("express")
const app=express()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const SECRECT_KEY="PASSKEY"

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
    }
    //if password match==> generate token
    const token=jwt.sign({"email":email},SECRECT_KEY,{"expiresIn":"1hr"});
    // jwt.sign(payload,secret_key,expiry_time(optional));
    // secret key puts stamp on token that it comes from verified source

    res.send({
        "message":"user logged in successfully",
        "token":token
    })
})

const authMiddleware=(req,res,next)=>{
    const headers_data=req.headers.authorization
    const token=headers_data.split(" ")[1] //token
    console.log(token)
    const decoded=jwt.verify(token,SECRECT_KEY)
    if(decoded){
        req.body.user=decoded
        next()
    }else{
        res.send("invalid token")
    }
    
    
    
}

app.get("/profile",authMiddleware,(req,res)=>{
    try{
        res.send({"message":"Profile page", "user":req.body})
    }catch(error){
        res.send("invalid token",error)
    }
})

app.get("/account",authMiddleware,(req,res)=>{
    try{
        res.send({"message":"Account page"})
    }catch(error){
        res.send("invalid token")
    }
})


app.listen(8000,()=>{
    console.log("server is running in http://localhost:8000/")
})