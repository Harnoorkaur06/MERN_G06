
let arr=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQqLqSXydsncz2x4kGkcGfy7OPmx2vRJPjcDXeOoANw&s=10",
    "https://www.tallengestore.com/cdn/shop/products/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_560cd581-c16f-46e2-a498-b9c61f2fb676.jpg?v=1582782930",
    "https://i.etsystatic.com/13513569/r/il/1e8178/1933195953/il_570xN.1933195953_9uge.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-4OG2FAsVq2euVns_2f6J9xxfVOhBBCucwWsDrYT5anvtVyWkSQdzlC4&s=10"
]

let container=document.getElementById("container")

let index=0;
let movies=document.createElement("img")
//<img>
function handleImage(){
    
    movies.setAttribute("src",arr[index])
    container.appendChild(movies)
    index++
    if(index==arr.length){
        index=0;
    }
}
setInterval(handleImage,2000)

