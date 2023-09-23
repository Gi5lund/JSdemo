
import {SERVER_URL} from "../setttings.js"
import {makeOptions} from "../../utils.js"

export function initAddCar(){
  addCar()
}

async function addCar(evt){
  // get cars from form
  
    //evt.preventDefault()
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const pricePrDay = parseFloat(document.getElementById("pricePrDay").value);
    const bestDiscount = parseInt(document.getElementById("bestDiscount").value);

    // Create a JavaScript object with the extracted data
    const newCar = {
      brand,
      model,
      pricePrDay,
      bestDiscount
    };
  const options= makeOptions("POST",newCar);
    
  await fetch(SERVER_URL, options)
  
}
