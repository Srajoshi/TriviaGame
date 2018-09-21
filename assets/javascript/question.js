// DOM elements
var startButtonHTML = document.getElementById("startReset");
var quwstionNumHTML = document.getElementById("questionNum");
var questionHTML = document.getElementById("question");
var correctHTML = document.getElementById("correctCount");
var incorrectHTML = document.getElementById("incorrectCount");
var answerHTML = document.getElementById("answerMsg");
var buttonAHTML = document.getElementById("buttonA");
var buttonBHTML = document.getElementById("buttonB");
var buttonCHTML = document.getElementById("buttonC");
var buttonDHTML = document.getElementById("buttonD");
var timeLeftHTML = document.getElementById("timeLeft");

var correct = 0;
var incorrect = 0;
var answerMsg = "";
var question = "";
var choice = "";
var gameFlag = false;
var intervalId;
var questions = [{

  question: "Why do JavaScript and Java have similar name?",
  choiceA: "JavaScript is a stripped-down version of Java",
  choiceB: "JavaScript's syntax is loosely based on Java's",
  choiceC: "They both originated on the island of Java",
  choiceD: "None of the above",
  answer: "B"

}, {

  question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
  choiceA: "The User's machine running a Web browser",
  choiceB: "The Web server",
  choiceC: " A central machine deep within Netscape's corporate offices",
  choiceD: "None of the above",
  answer: "A"

}, {

  question: "Which of the following are capabilities of functions in JavaScript?",
  choiceA: "Return a value",
  choiceB: "Accept parameters and Return a value",
  choiceC: "Accept parameters",
  choiceD: "None of the above",
  answer: "C"

}, {

  question: "Which of the following is not a valid JavaScript variable name?",
  choiceA: "2names",
  choiceB: "_first_and_last_names",
  choiceC: "FirstAndLast",
  choiceD: "None of the above",
  answer: "A"

}, {

  question: " ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
  choiceA: "<SCRIPT>",
  choiceB: "<BODY>",
  choiceC: "<HEAD>",
  choiceD: "<TITLE>",
  answer: "A"

}, {

  question: "What is the correct JavaScript syntax to write 'Hello World'?",
  choiceA: "System.out.println('Hello World')",
  choiceB: "println ('Hello World')",
  choiceC: "document.write('Hello World')",
  choiceD: "response.write('Hello World')",
  answer: "A"

}, {

  question: "Which is the correct way to write a JavaScript array?",
  choiceA: "var txt = newArray(1:'tim',2:'kim',3:'jim')",
  choiceB: "var txt = newArray:1=('tim')2=('kim')3=('jim')",
  choiceC: "var txt = newArray('tim', 'kim', 'jim')",
  choiceD: "var txt = newArray = 'tim', 'kim', 'jim'",
  answer: "C"

}, {

  question: "Which of the following is the structure of an if statement??",
  choiceA: "if (conditional expression is true) thenexecute this codeend if",
  choiceB: "if (conditional expression is true)execute this codeend if",
  choiceC: "if (conditional expression is true)   {then execute this code>->}",
  choiceD: " if (conditional expression is true) then {execute this code}",
  answer: "C"

}];
// var i =0
function display(i) {

  questionHTML.textContent = questions[i].question;
  buttonAHTML.textContent = questions[i].choiceA;
  buttonBHTML.textContent = questions[i].choiceB;
  buttonCHTML.textContent = questions[i].choiceC;
  buttonDHTML.textContent = questions[i].choiceD;

  answerHTML.empty();

};

// display();
var i = 0;

$("#startReset").on("click", display(i));
console.log(i);
$(".btnpick").on("click", function () {

 choice = $(this).val();
console.log(choice);
if (choice === questions[i].answer){
console.log(true)
// stop timer
// start the 5 sec timer
i++
answerHTML.textContent = "Correct!";
} else {
  console.log(false)
  answerHTML.textContent = "Incorrect! the correct answer is: " + questions[i].answer + "."
i++
}


});



// var number = 10;
// var intervalId;


// //$("#stopReset").on("click", stop);
// // when gameFlag = true


// function run() {
//   clearInterval(intervalId);
//   intervalId = setInterval(decrement, 1000);
//   //gameFlag = true
// }

// //  The decrement function.
// function decrement() {

//   //  Decrease number by one.
//   number--;

//   //  Show the number 
//   $("#timeLeft").text(number);

//   //  Once number hits zero...
//   if (number === 0) {

//     //run the stop function.
//     stop();

//     //  message time is up.
//     answerHTML.textContent = ("Time Up! The correct answer is: ");

//   }
// }

// //  The stop function
// function stop() {

//   clearInterval(intervalId);
// }

// //  Execute the run function.

// $("#startReset").on("click", run);
// $(".btnpick").on("click", stop);