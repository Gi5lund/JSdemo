const COUNTRY_API="https://countries.plaul.dk/api/countries"

document.getElementById("svg2").addEventListener("click",mapHandler)
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
let previousElement=null;

function mapHandler(evt){
    const elementPressed=evt.target
    const id=elementPressed.id
    console.log(id)
    // Check if there was a previously selected element
  if (previousElement) {
    // Revert the style of the previous element to its default color
    previousElement.style.fill = previousElement.dataset.defaultColor;
  }

  // Store the default color of the current element
  elementPressed.dataset.defaultColor = elementPressed.style.fill;

  // Set the new color for the currently selected element
  elementPressed.style.fill = "green";
    fetch(COUNTRY_API+"/"+id)
    .then(res=>{
        if(!res.ok){
            return alert("country not found")
        }
        return res.json()})
    .then(country=>{
        
        const row=
             `<img src=${country.flag}>
             <p>NAME: ${country.name.common}</p>
             <p>CAPITAL: ${country.capital}</p>
             <p>AREA: ${country.area} </p>
             <p>CURRENCY:${clean(JSON.stringify(country.currencies," ",3))}</p>`
           
             
        
             document.querySelector("#info").innerHTML=row
    })
    
            
    previousElement=elementPressed;
}
