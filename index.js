var readlineSync = require('readline-sync');
 //introduction
 var intro = readlineSync.question("what is your name? ")
 console.log("welcome" + intro + " I'm so glad you're here.");

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
    question:"what is silent voice said in Japanese? ",
    answer:"koe no katchi"
  },
  {
    question:"main character name (boy) name in silent voice? ",
    answer:"shoyo ishida"
  },
   {
    question:"what is the girls name who couldn't speak ",
    answer:"shoyo nishimiya"
  },
   {
    question: "Does shoyo nishimiya had a sister?" ,
    answer:"yes"
  },
   {
    question:"naruto's surname?" ,
    answer:"uzumaki"
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


