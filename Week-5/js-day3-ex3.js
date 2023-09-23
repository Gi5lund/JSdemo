const SERVER_URL="http://localhost:8080/api/cars"
document.querySelector("#btn-get-all").addEventListener("click",getAllCars)
document.querySelector("#btn-find-car").addEventListener("click",getACar)
document.querySelector("#item-to-edit").addEventListener("click",editCar) //
document.querySelector("#submitBtn").addEventListener("click",extractFormData) //
document.querySelector("#editbtn").addEventListener("click",extractFormData) //

// document.getElementById("carRentalForm").addEventListener("click", function(evt){
//     extractFormData(evt,"carRentalForm") 
// });
// document.getElementById("car-edit-form").addEventListener("click", function(evt){
//     extractFormData(evt,"car-edit-form") 
// });


function clean(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/</g, "&lt;");
   // str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    str=str.replace(/{/g," ");
    str=str.replace(/}/g," ");
    str=str.replace(/"/g,"");
    return str;
}
function editCar(){
    
    const id=document.getElementById("text-for-id2").value 
    fetch(SERVER_URL+"/"+id)
    .then(res=>{
        if(!res.ok){
            return alert("car not found")
        }
        return res.json()
    })
    .then(car=>{
        
     
    document.getElementById("id1").value=car.id
    document.getElementById("brand1").value=car.brand
    document.getElementById("model1").value=car.model
    document.getElementById("pricePrDay1").value=car.pricePrDay
    document.getElementById("bestDiscount1").value=car.bestDiscount
        
        
})

}

function getACar(){
    const id=document.getElementById("text-for-id").value 
    fetch(SERVER_URL+"/"+id)
    .then(res=>{
        if(!res.ok){
            return alert("car not found")
        }
        return res.json()
    })
    .then(car=>{document.getElementById("found-car").innerText=clean(JSON.stringify(car,null,2));
})
}

function getAllCars(){
    fetch(SERVER_URL)
    .then(res=>res.json())
    .then(cars =>  {
        
    const tablerows=cars.map(car=> `
    <tr>
    <td>${car.id} </td>
    <td>${car.brand} </td>
    <td>${car.model} </td>
    <td>${car.pricePrDay} </td>
    <td>${car.bestDiscount} </td>    
    </tr>
    `)
    const rowsAsStr=tablerows.join("")
    document.getElementById("tbody").innerHTML=rowsAsStr //Remember XSS
})
}
   // Function to extract data from the form
//    function extractFormData(evt,formId) {
//     evt.preventDefault()
   
//     const form = document.getElementById(formId);
//     const formData = new FormData(form);
  
//     const newCar = {};
//     formData.forEach((key, value) => {
//       newCar[key] = value;
//     });

   
//     const options={
//         method:"POST",
//         headers: {"Content-Type": "application/json"},
//         body:JSON.stringify(newCar)
//     }
//     fetch(SERVER_URL,options)
//     .then(res=>res.json())
//     .then(carRespons=>{
//         document.getElementsById("carresponse").innerText=JSON.stringify(carRespons,null,3)
//     })
//   }
  function extractFormData(evt) {
    evt.preventDefault()
   const idmod= evt.target.id=="submitBtn" ? "":"1";
   const id= document.getElementById(`id${idmod}`).value ;
    const brand = document.getElementById(`brand${idmod}`).value;
    const model = document.getElementById(`model${idmod}`).value;
    const pricePrDay = parseFloat(document.getElementById(`pricePrDay${idmod}`).value);
    const bestDiscount = parseInt(document.getElementById(`bestDiscount${idmod}`).value);

    // Create a JavaScript object with the extracted data
    const newCar = {
      id,  
      brand,
      model,
      pricePrDay,
      bestDiscount
    };
    
   const methods= idmod=="" ? "POST":"PUT"
   const url= SERVER_URL+ ((methods==="POST") ? "" :"/"+id)
    const options={
         method:methods,
        //method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(newCar)
    }
    fetch(url,options)
    .then(res=>res.json())
    .then(carRespons=>{
        document.getElementById(`carresponse${idmod}`).innerText=JSON.stringify(carRespons,null,4)
    })
  }
  
  
