var readLineSync = require("readline-sync");
var chalk = require("chalk");
var userName= readLineSync.question("What is your Name?  ");

console.log("\n");
console.log("Welcome! " + chalk.bold(userName) + " to "
+chalk.red("THE ")+chalk.yellowBright("HARRY ")+chalk.blueBright("POTTER ")+chalk.greenBright("QUIZ "));
console.log("\n");

var score = 0;

function play(question, answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("right!"));
    score++;
  }else{
    console.log(chalk.red("wrong!"));
  }
  console.log("Correct answer is : "+answer)
}



var questionSet=[
  {question: 
    `In quidditch, how many points is the golden Snitch worth?
    a: 50
    b: 100
    c: 150
    d: 200\n`,
  answer: 
    "c"},
  {question:
   `What is Hermione's middle name?
    a: jane
    b: jean
    c: jill
    d: jade\n`,
  answer:
   "b"},
  {question:
    `Who is not a founder of Hogwarts?
    a: Godric Gryffindor
    b: Helena Revenclaw
    c: Helga Hufflepuff
    d: Salazar Slytherin\n`,
  answer:
    "b"},
  {question:
    `What is a Squib?
    a: A dessert popular with goblins
    b: Wizard-born non-magical person
    c: Hagrid's favourite magical creature
    d: Someone who practices dark magic\n`,
  answer: 
    "b"},
  {question:
    `How many kids does Harry Have at the end of the last book?
    a: 1
    b: 2
    c: 3
    d: 4\n`,
  answer: 
    "c"}
]

var highScores =[
  {name: "Chinmayee",score: 5},
  {name: "Prachee", score: 3}
]

for(i=0; i<questionSet.length; i++){
  play(questionSet[i].question,  questionSet[i].answer);
}
console.log("\n");
console.log("Your final Score: "+chalk.bold(score));
console.log("Check out the Highscores!!!");


for(i=0; i<highScores.length; i++){
  console.log(chalk.bgCyan(highScores[i].name + " : "+ highScores[i].score));
  
}
console.log("\n");

for(i=0; i<highScores.length; i++){
  if(score > highScores[i].score){
    console.log(chalk.bold("Congratulations!!! You beat "+highScores[i].name + " In this game"));

    console.log("If you want to see your name on the Highscores board, Please send a screenshot of your score ");
  }
}


