/*
Title: Assignment2Buttons.js
Author: Jonathan Carney
*/
function press(n) {
  //gets current vallue of the button
  let val = document.getElementById('status' + n).value;
  //changes value of the button when the press function is called
  if (val == "Not Pressed") {
    document.getElementById('status' + n).value = "Pressed";  
  } else {
    document.getElementById('status' + n).value = "Not Pressed";
  }
}
