const furnituresAPI = new APIHandler("http://localhost:3000")

$(document).ready( () => {
  
  document.getElementById('furnitureForm').onsubmit = async (e) =>{
    e.preventDefault()

    const form = document.getElementById("furnitureSection");
    form.style.display = "none";

   const furniture = {
     typeOfTables: document.getElementById('TypeOfTables').value,
     mobiliaryStyle: document.getElementById('MobiliaryStyle').value,
     tableClothsAndChairs: document.getElementById('tableClothsAndChairs').value,
     lace: document.getElementById('lace').value,
     tent: document.getElementById('tent').value,
     priceOfService: document.getElementById('furniturePriceOfService').value,
     description: document.getElementById('furnitureDescription').value
   }
    await furnituresAPI.createOne(furniture)
    console.log(furniture)
  }
})