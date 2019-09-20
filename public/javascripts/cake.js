const cakesAPI = new APIHandler("https://aqueous-ocean-73744.herokuapp.com")

$(document).ready( () => {
  
  document.getElementById('cakeForm').onsubmit = async (e) =>{
    e.preventDefault()

    const form = document.getElementById("cakeSection");
    form.style.display = "none";

   const cake = {
     idEvent: document.getElementById('cakeIdEvent').value,
     limitPrice: document.getElementById('cakeLimitPrice').value,
     name: document.getElementById('cakeName').value,
     flavor: document.getElementById('cakeFlavor').value,
     term: document.getElementById('cakeTerm').value,
     filling: document.getElementById('cakeFilling').value,
     floors: document.getElementById('cakeFloors').value,
     description: document.getElementById('cakeDescription').value
   }
    await cakesAPI.createOneCake(cake)
  }
})