let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let ageInput = document.getElementById("ageInput");
let completed = document.getElementById("schoolYes");
let progress = document.getElementById("schoolNo");
let submit = document.getElementById("inputSubmit");
console.log(
  `User Demographics: ${"FIRST NAME: " +
    firstName.value +
    " LAST NAME: " +
    lastName.value +
    " AGE: " +
    ageInput.value}`
);
submit.addEventListener("click", declaration);

function declaration() {
  if (document.getElementById("schoolNo").checked === true) {
    console.log("You're doing great");
  } else if (document.getElementById("schoolYes").checked === true) {
    console.log("You're a big, fat phony!");
  }
}
// Alex's help
// submit.addEventListener('click', declaration);
// function declaration() {
//     if (document.getElementById('schoolNo').checked === true) {
//         console.log("You're doing great!")
//     } else if (document.getElementById("schoolYes").checked === true) {
//         console.log("You're a big, fat, phony!")
//     } else {
//         console.log("What?");
//     }
// }
