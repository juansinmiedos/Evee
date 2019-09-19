$("#seeAnotherFieldGroup").change(function() {
  if ($(this).val() == "Supplier") {
    $('#otherFieldGroupDiv').show();
  } else {
    $('#otherFieldGroupDiv').hide();
  }
});
$("#seeAnotherFieldGroup").trigger("change");

function myCakeFunction() {
  const checkBox = document.getElementById("selectCake");
  const text = document.getElementById("cakeSection");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function myFurnitureFunction() {
  const checkBox = document.getElementById("selectFurniture");
  const text = document.getElementById("furnitureSection");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

function myPhotoFunction() {
  const checkBox = document.getElementById("selectPhoto");
  const text = document.getElementById("photoSection");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

// function myFurnitureForm() {
//   const form = document.getElementById("furnitureForm");
//   form.style.display = "none";
// }

// document.getElementById('mainForm').onsubmit = (e) => {
//   e.preventDefault()
//   const form = document.getElementById("mainSection");
//   form.style.display = "none";
// }


// document.getElementById('furnitureForm').onsubmit = (e) => {
//   e.preventDefault()
//   const form = document.getElementById("furnitureSection");
//   form.style.display = "none";
// }