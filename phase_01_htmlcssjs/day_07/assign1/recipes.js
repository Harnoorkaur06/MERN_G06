// https://dummyjson.com/recipes

let cardContainer=document.getElementById("cardsContainer")

// let url='https://dummyjson.com/recipes/search?q=${value}'
let fetchData=async(value="")=>{
    let response= await fetch(`https://dummyjson.com/recipes/search?q=${value}`)
    let data=await response.json()
    
    let arr=data.recipes
    cardContainer.innerHTML=""
    arr.forEach((element , i )=> {
        // console.log(arr[i].name)
        cardContainer.innerHTML+=`
        <div id="d-${i}">
            <img src="${element.image}">
            <h3>${element.name}</h3>
            <p>Timne:${element.prepTimeMinutes} Minutes</p>
            <button onclick="handleDelete(${i})">Delete</button>
        </div>
        `
    });


}
fetchData()

function handleDelete(divId){
    // alert(`trigered ${divId}`)
    let div=document.getElementById(`d-${divId}`)
    div.remove()
}

function searchRecipe(){
    let inp=document.getElementById("inp").value
    fetchData(inp)
    document.getElementById("inp").value=""
}

// diff between normal func and arroe func
// how hoisting behaves in both         