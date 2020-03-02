let currentHour = prompt("Enter the current hour");

if (currentHour < 0) {
  alert = "Input is incorrect";
} else if (currentHour > 23) {
  alert("Input is incorrect");
} else if (currentHour < 8) {
  alert("Outside of office hours");
} else if (currentHour > 18) {
  alert("Outside of office hours");
} else if (currentHour >= 8) {
  alert("Office is open");
} else if (currentHour <= 18) {
  alert("Office is open");
}
