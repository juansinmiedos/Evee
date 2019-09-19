const photosAPI = new APIHandler("http://localhost:3000")

$(document).ready( () => {
  
  document.getElementById('photoForm').onsubmit = async (e) =>{
    e.preventDefault()

    const form = document.getElementById("photoSection");
    form.style.display = "none";

   const photo = {
     typeOfAlbum: document.getElementById('typeOfAlbum').value,
     hoursOfService: document.getElementById('hoursOfService').value,
     priceOfService: document.getElementById('photoPriceOfService').value,
     description: document.getElementById('photoDescription').value
   }
    await photosAPI.createOne(photo)
    console.log(photo)
  }
})