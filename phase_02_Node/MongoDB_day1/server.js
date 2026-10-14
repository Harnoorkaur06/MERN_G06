const express=require("express")
const app=express()

const {connection} =require("./config/db")

app.listen(8000,async()=>{
    try{
        await connection
        console.log("DB connected successfully")
    }catch(error){
        console.log(error)
    }
})