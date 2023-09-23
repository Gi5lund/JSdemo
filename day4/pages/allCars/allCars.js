import {SERVER_URL} from "../setttings.js"

export async function initAllCars() {
  console.log("initAllCars")

  const cars = await getCars()
  
  const listItems = cars.map(car => `
        <li>${car.id} , ${car.brand} </li>
    `).join("")
    document.getElementById("cars").innerHTML = listItems //Remember XSS
}

async function getCars(){
  const cars = await fetch(SERVER_URL).then(res=>res.json())
  return cars
}
