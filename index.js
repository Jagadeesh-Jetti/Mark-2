var score = 0;
var highScores = [
  {
    name: "Jagadeesh",
    score: 5,
  },
  {
    name: "Rmn",
    score: 4,
  },
]

//2. Questions to display
var questions = [
  {
    question: "1. What is the age when naruto mastered Sage mode?\n" ,
    answer: "16"
  },
  {
    question: "2. Who is the most sweetest person to naruto in his academy?\n" ,
    answer: "Hinata"
  },
  {
    question: "3. Who is called the Yellow Flash of leaf?\n" ,
    answer: "Minato"
  },
  {
    question: "4. Who is the best Sensei to Naruto?\n" ,
    answer: "Jiraya"
  },
  {
    question: "5. What is naruto's wife name?\n" ,
    answer: "Hinata"
  }
];

// Step 1. Intro 
var readlineSync = require("readline-sync");
console.log("Hurray! You entered the Naruto fandom!");
var name = readlineSync.question("What is ur name?\n");
console.log("Hi! " + name);
console.log("______________________________");
var entry = readlineSync.question("1.Enter Rasengan to take a quiz.\n2.Enter Dattebayo to end the session\n");
console.log("______________________________");
if (entry === "Rasengan") {
  console.log("***Welcome to the quiz***");
  game();
  scores();
}
else
{
  console.log("Thanks for checking naruto fandom. Happy day");
}


function process(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) { 
    console.log("right!");
    score = score + 1;    
  } else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("_____________________________")
}


function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    process(currentQuestion.question, currentQuestion.answer)
  }
}

function scores() {
  console.log("Wooah! Your final score is: ", score);
  console.log("Check out the high scores of the QUiz!");

  highScores.map(score => console.log(score.name, " : ", score.score))
}





