let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let age = document.getElementById("age");
let phNumber = document.getElementById("phNumber");
let street = document.getElementById("street");
let postalCode = document.getElementById("postalCode");
let submitText = document.getElementById("submitText");

function showUser() {
  let userInfo = console.log(fName.value);

  console.log(lName.value);

  console.log(age.value);

  console.log(phNumber.value);

  console.log(street.value);

  console.log(postalCode.value);
}

submitText.addEventListener("click", showUser);
submitText.addEventListener("click", maritalStatus);

function maritalStatus() {
  if (document.getElementById("radioMarried").checked === true)
    console.log("Married");
  else if (document.getElementById("radioSingle").checked === true)
    console.log("Single");
}
