// https://dummyjson.com/recipes

let cardContainer=document.getElementById("cardsContainer")

let url='https://dummyjson.com/recipes'
let fetchData=async()=>{
    let response= await fetch(url)
    let data=await response.json()
    
    let arr=data.recipes

    arr.forEach((element , i )=> {
        // console.log(arr[i].name)
        cardContainer.innerHTML+=`
        <div id="d-${i}">
            <img src="${element.image}">
            <h3>${element.name}</h3>
            <p>Timne:${element.prepTimeMinutes}</p>
            <button>Delete</button>
        </div>
        `
    });


}
// fetchData()

// diff between normal func and arroe func
// how hoisting behaves in both