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

}]

// var clockRunning = false;

// // Our stopwatch object
// var stopwatch = {

//   time: 20,

//   reset: function() {

//     stopwatch.time = 0;

//     // DONE: Change the "display" div to "00:00."
//     $("#timeLeft").text("00:00");

//   },
//   start: function() {

//     // DONE: Use setInterval to start the count here and set the clock to running.
//     if (!clockRunning) {
//       intervalId = setInterval(stopwatch.count, 1000);
//       clockRunning = true;
//     }
//   },
//   stop: function() {

//     // DONE: Use clearInterval to stop the count here and set the clock to not be running.
//     clearInterval(intervalId);
//     clockRunning = false;
//   },
//   // recordLap: function() {

//   //   // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
//   //   //       and save the result in a variable.
//   //   var converted = stopwatch.timeConverter(stopwatch.time);

//   //   // DONE: Add the current lap and time to the "laps" div.
//   //   $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");

//   //   // DONE: Increment lap by 1. Remember, we can't use "this" here.
//   //   stopwatch.lap++;
//   // },
//   count: function() {

//     // DONE: increment time by 1, remember we cant use "this" here.
//     stopwatch.time--;

//     // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
//     //       and save the result in a variable.
//     var converted = stopwatch.timeConverter(stopwatch.time);
//     console.log(converted);

// DONE: Use the variable we just created to show the converted time in the "display" div.
// $("#timeLeft").text(converted);
//   },
//   timeConverter: function(t) {

//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);

//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }

//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     return minutes + ":" + seconds;
//   }
// };
// $("#startReset").on("click", stopwatch.start);
// gameFlag = true;
