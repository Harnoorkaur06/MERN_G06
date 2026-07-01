// var,let,const

var btn=document.getElementById("Submit")
// OR  document.querySelector("#Submit")
// console.log(btn)
btn.addEventListener("click",handleClick)

function handleClick(){
    // alert("button is triggered")

    var image=document.getElementById("url")
    var title=document.getElementById("title")
    var rating=document.getElementById("rating")

    var inpImage=image.value
    var inpTitle=title.value
    var inpRating=rating.value

    var movieDiv=document.getElementById("moviesCards")

    // ``--> template litrals
    movieDiv.innerHTML+=`
    <div class="card">
                <img src="${inpImage}" alt="">
                <p>Movie: ${inpTitle}</p>
                <h3>Rating: ${inpRating} </h3>
                
            </div>
    `
    image.value=""
    title.value=""
    rating.value=""
}

