// 1. Attach this file -- practice.js -- to the index.html file using a <script> tag
// Done!

// 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable
let answer_1 = prompt("Hi there! Thank you for visiting JS Practice. What may I call you?");

// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable
let answer_2 = prompt("Great! Thank you, " + answer_1 + ". Do you know how to find the length of a string using JavaScript?");

// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"
let demo = answer_1.toUpperCase() + " " + answer_2.toUpperCase();

// 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable. 
let number = demo.length;

// 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."
alert('The string "' + demo + '" is ' + number + ' characters long. You can find out the length of a string by using "string.length" :)');
