
let x = parseInt(prompt("Input number x please:"), "10");
let y = parseInt(prompt("Input number y please:"), "10");
let z = parseInt(prompt("Input number z please:"), "10");

if (x>y && x>z) {
  if (y>z) {
    console.log(document.getElementById("displayEl").innerText = x + "," + y + "," + z);
  } else if (y<z) {
    console.log(document.getElementById("displayEl").innerText = x + "," + z + "," + y);
  }
} else if (x<y && x>z) {
  if (y>z) {
    console.log(document.getElementById("displayEl").innerText = y + "," + x + "," + z);
  } else if (y<z) {
    console.log (document.getElementById("displayEl").innerText = z + "," + y + "," + x);
  }
} else if (document.getElementById("displayEl").innerText = x<z && y<z) {
  if (x>y) {
    console.log(document.getElementById("displayEl").innerText = z + "," + x + "," + y);
  } else if (x<y) {
    console.log(document.getElementById("displayEl").innerText = z + "," + y + "," + x);
  }
}


// Write a JavaScript conditional statement to sort three numbers. 
// Display an alert box to show the result.
//https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php#EDITOR
