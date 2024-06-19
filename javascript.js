// // Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.//
function calculateFactorial(n) {
    if (n < 0) {
        return "Invalid input, please enter a non-negative integer.";
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log("1.", calculateFactorial(1));


// // Write a function isPrime(num) that takes a positive integer num and returns true if the number is prime, and false otherwise//  
function primenum(num) {
    if (num < 0) {
        return "enter a positive number"
    }
    if (num === 2) {
        return "true"
    }
    if (num % 2 == 1) {
        return "true"
    }
    else {
        return "false"
    }
}
let num1 = 5
console.log("2.", primenum(4));


// //Write a function sumEvenNumbers(start, end) that takes two integers start and end, and returns the sum of all even numbers in the inclusive range from start to end//
function sumEvenNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            sum+=i;
        }
    }
    return sum;
}
let start = 0
let end = 5
let sum = 0
console.log("3.", sumEvenNumbers(start,end));


// Write a JavaScript program to remove items(clicking on a button) from a drop-down list.//

function removeSelectedItem() {
    var select = document.getElementById("mySelect");
    select.remove(select.selectedIndex);
}

//  5. Write a JavaScript program to change the  color given text in p tag  
//  if you select green then the color of the text should be green 


function changeTextColor() {
    var select = document.getElementById("colorSelect");
    var selectedColor = select.value;
    var text = document.getElementById("textToChange");
    text.style.color = selectedColor;
}

// 7. Write a JavaScript program to display a random image (clicking on a button) from the following list.

function displayRandomImage() {
    var images = [
     'http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot',  
      ' http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot',
      'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot' 
    ];

    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];

    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '<img src="' + selectedImage + '" alt="Random Image">';
}

