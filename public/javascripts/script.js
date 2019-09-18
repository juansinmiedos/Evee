$("#seeAnotherFieldGroup").change(function() {
  if ($(this).val() == "Supplier") {
    $('#otherFieldGroupDiv').show();
  } else {
    $('#otherFieldGroupDiv').hide();
  }
});
$("#seeAnotherFieldGroup").trigger("change");

// $("#selectCake").change(function() {
//   if ($(this).checked = true) {
//     $('#cakeSection').show();
//     console.log($(this))
//   } else {
//     $('#cakeSection').hide();
//   }
// });
// $("#selectCake").trigger("change");

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