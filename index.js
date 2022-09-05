var readlineSync = require('readline-sync');
 //introduction
 var intro = readlineSync.question("what is your name? ")
 console.log("welcome " + intro + " I'm so glad you're here.");

 //score
 var score =0;

var highScore = [
  {
    name:"pranish",
    score: 5
  },
];

 //function 
 function quiz(question,answer){
   var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("right");
    score++;
  }else{
    console.log("wrong");
   
  }
  console.log("Your current score is : " + score);
  console.log("-----------");
  
 }

//object
var questions = [
  {
    question:"In the avengers infinity war, who was the second last person that Thanos took the infinity stone from?(please provide full name of that person)",
    answer:"Doctor Strange"
  },
  {
    question:"where is black panther from?",
    answer:"wakanda"
  },
   {
    question:`who said the famous dialogue "He's friend from work" in the MCU ?`,
    answer:"Thor"
  },
   {
    question: "what did Captain America calls Spiderman?" ,
    answer:"Queens"
  },
   {
    question:"which animal is the character Rocket from guardian of the galaxy?" ,
    answer:"racoon"
  }
];

//for loop
function game(){
for(var i=0; i<questions.length;i++){
  var userQuestions = questions[i];
  quiz(userQuestions.question,userQuestions.answer);

}
}

function showScores(){
  console.log("Your final score is : " + score);

  console.log("-------");
  console.log("PS: if you got the high score, screenshot it and send it to me.i'll update it as soon as possible")
  console.log("High Scorers: ")
 highScore.map(score=>console.log(score.name,":", score.score));
}

game();
showScores();


