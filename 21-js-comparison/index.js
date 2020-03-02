console.log("connected");
alert("Enter two numbers to see if the first is greater than the second");

let input1 = prompt("Enter the first number");
let input2 = prompt("Enter a second number");

function comparison(input1, input2) {
  if (input1 >= input2) {
    console.log("First number is greater than, or equal to, the second.");
  } else if (input1 <= input2) {
    console.log("Second number is greater than, or equal to, the first number");
  }
}

comparison(input1, input2);
