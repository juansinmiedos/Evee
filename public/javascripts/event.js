const eventsAPI = new APIHandler("https://aqueous-ocean-73744.herokuapp.com")

$(document).ready( () => {
  
  document.getElementById('eventForm').onsubmit = async (e) =>{
    e.preventDefault()

    const form = document.getElementById("mainSection");
    form.style.display = "none";

   const event = {
     nameOfEvent: document.getElementById('nameOfEvent').value,
     numberOfGuests: document.getElementById('numberOfGuests').value,
     date: document.getElementById('date').value,
     selectCake: document.getElementById('selectCake').value,
     selectFurniture: document.getElementById('selectFurniture').value,
     selectPhoto: document.getElementById('selectPhoto').value,
     lng: document.getElementById('lng').value,
     lat: document.getElementById('lat').value,
     address: document.getElementById('address').value,
     description: document.getElementById('description').value
   }

   const idfactor = document.getElementById('nameOfEvent').value
   document.getElementById('cakeIdEvent').value = idfactor
   document.getElementById('furnitureIdEvent').value = idfactor
   document.getElementById('photoIdEvent').value = idfactor

    await eventsAPI.createOne(event)
  }
})
