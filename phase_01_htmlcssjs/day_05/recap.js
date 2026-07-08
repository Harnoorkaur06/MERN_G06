console.log("start")

let t=document.getElementById("title")

setTimeout(function(){
    t.innerText="bale bale"
},3000)

let counter=0;
let hcount=document.getElementById("count")
setInterval(function(){
    counter++;
    hcount.innerText=counter
    if(counter==10){
        counter=0;
    }
},1000)

console.log("end")
