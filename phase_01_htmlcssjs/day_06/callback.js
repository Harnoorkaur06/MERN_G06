
function greetMsg(callbck){
    console.log("welcome to day6")
    callbck()
}

function callbck(){
    console.log("gummoning")
}

greetMsg(callbck)