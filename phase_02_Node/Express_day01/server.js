

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
    const newUser={...req.body,id:js_objects.users.length+1}
    // console.log(newUser)

    // checking user exist or not
    const check_user=js_objects.users.some((el)=>el.email==newUser.email)
    // some returns true or false acc to consition given
    // therefore check_user will return true or false
    if(check_user){
        res.send("User already exists")
    }else{
        js_objects.users.push(newUser) //accessing users key from js_objects
        fs.writeFileSync("db.json",JSON.stringify(js_objects))
        res.send("user saved successfully")

    }

    
})

app.get("/users/:id",(req,res)=>{
    // res.send(req.params) //parameters==> {"id":1} --> in key-value pair
    const userId=req.params.id // users/:4 ==> 4
    // when we get userId from client then we need to match that is with database id and fetch relevent user from db
    // res.send("single user fetched")
    const data=fs.readFileSync("db.json","utf-8")
    const js_objects=JSON.parse(data)

    const find_user=js_objects.users.find((el)=>el.id==userId) //finding user who will match with client entered id

    if(find_user){
        res.send(find_user) //providing all details of userId 4 here
    }
    else{
        res.send("user doesnt exist")
    }

})
// deleting single user

app.delete("/users/:id",(req,res)=>{
    const userId=req.params.id // users/:4 ==> 4
    const data=fs.readFileSync("db.json","utf-8")
    const js_objects=JSON.parse(data)

    const updated_data=js_objects.users.filter((el)=>el.id!=userId) 
    js_objects.users=updated_data 
    fs.writeFileSync("db.json",JSON.stringify(js_objects))
    res.send("user deleted successfully")

})

app.put("/users/:id",(req,res)=>{
    const userId=req.params.id // users/:4 ==> 4
    const data=fs.readFileSync("db.json","utf-8")
    const js_objects=JSON.parse(data)

    const find_user=js_objects.users.find((el)=>el.id==userId)
    find_user.email=req.body.email
    find_user.name=req.body.name
    
    fs.writeFileSync("db.json",JSON.stringify(js_objects))
    res.send("user updated successfully")

})

app.listen(8000,()=>{
    console.log("server started in http://localhost:8000")
})


