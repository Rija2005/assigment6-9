//ASSIGMENT6-9
//CHAPTER 6-9
//QUESTION N0 1

// let b = 10;
// let Result = b++;
// document.write( "Now the value is" + Result);

// let a = 11;
// let result = ++a;
// document.write('<br>',"Now the value is" + result);



// let c = 12;
// let resUlt = --c;
// document.write('<br>',"Now the value is" + resUlt);


// let d= 10;
// let resulT = d--;
// document.write('<br>',"Now the value is" + resulT);

//QUESTION NO 2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(a);
console.log(b);
console.log("Result", result);

//QUESTION NO3
// Prompt the user to enter their name
var userName = prompt("Enter your name:");

// Greet the user
if (userName) {
    alert("Hello, " + userName + "! Welcome to the program.");
} else {
    alert("Hello! Welcome to the program.");
}
//QUESTION NO 4

var inputNumber = prompt("Enter a number to display its multiplication table:");

inputNumber = parseInt(inputNumber);


if (isNaN(inputNumber) || inputNumber === 0) {
    inputNumber = 5;
}

document.write("<h2>Multiplication Table of " + inputNumber + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(inputNumber + " x " + i + " = " + (inputNumber * i) + "<br>");
}



//QUESTION N0 5
var subject1 = prompt("Enter name of subject 1:");
var subject2 = prompt("Enter name of subject 2:");
var subject3 = prompt("Enter name of subject 3:");


var totalMarks = 100;

var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));


var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;


document.write("<h2>Result:</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>" + (3 * totalMarks) + "</b></td><td><b>" + totalObtainedMarks + "</b></td></tr>");
document.write("</table>");
document.write("<p><b>Percentage:</b> " + percentage.toFixed(2) + "%</p>");



