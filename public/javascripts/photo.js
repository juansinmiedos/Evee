const photosAPI = new APIHandler("http://localhost:3000")

$(document).ready( () => {
  
  document.getElementById('photoForm').onsubmit = async (e) =>{
    e.preventDefault()

    const form = document.getElementById("photoSection");
    form.style.display = "none";

   const photo = {
     idEvent: document.getElementById('photoIdEvent').value,
     limitPrice: document.getElementById('photoLimitPrice').value,
     typeOfAlbum: document.getElementById('typeOfAlbum').value,
     hoursOfService: document.getElementById('hoursOfService').value,
     description: document.getElementById('photoDescription').value
   }
    await photosAPI.createOnePhoto(photo)
    console.log(photo)
  }
})