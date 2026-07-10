let container=document.getElementById("container")

// fetch('api',[methods])

let response=fetch("https://dummyjson.com/products")
                .then(function(res){
                    return res.json()
                }).then(function(data){

                    for(let item of data.products){
                        container.innerHTML+=`
                        <div>
                             <img src="${item.images[0]}" alt="">
                            <h2>${item.title}</h2>
                            <p>Brand:${item.brand}</p>
                            <p>Price:${item.price}</p>
                        </div>
                        `
                    }
                })

let obj={"id":1,"name":"Tshirt"}


           
  