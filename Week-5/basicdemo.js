const SERVER_URL="http://localhost:8080/api/cars/"

// fetch(SERVER_URL).then(res=>res.json()).then(data=>{
//     console.log(data)
// })

const newCar = {
    brand: "Toyata",
    model: "RAV",
    pricePrDay: 500,
    bestDiscount: 25
  }  
  
  const options = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(newCar)
}
fetch(SERVER_URL,options).then(res=>res.json()).then(carResponse=>{
    console.log(carResponse)
})