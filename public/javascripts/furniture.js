const furnituresAPI = new APIHandler("http://localhost:3000")

$(document).ready( () => {
  
  document.getElementById('furnitureForm').onsubmit = async (e) =>{
    e.preventDefault()

    const form = document.getElementById("furnitureSection");
    form.style.display = "none";

   const furniture = {
     idEvent: document.getElementById('furnitureIdEvent').value,
     limitPrice: document.getElementById('furnitureLimitPrice').value,
     color: document.getElementById('color').value,
     typeOfTables: document.getElementById('TypeOfTables').value,
     mobiliaryStyle: document.getElementById('MobiliaryStyle').value,
     tableClothsAndChairs: document.getElementById('tableClothsAndChairs').value,
     tent: document.getElementById('tent').value,
     description: document.getElementById('furnitureDescription').value
   }
    await furnituresAPI.createOneFurniture(furniture)
    console.log(furniture)
  }
})