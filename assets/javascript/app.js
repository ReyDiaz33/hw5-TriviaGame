/* Instructions
- You'll create a trivia form with multiple choice or true/false options (your choice).
- The player will have a limited amount of time to finish the quiz. 
- The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
- Don't let the player pick more than one answer per question.
- Don't forget to include a countdown timer.*/


console.log(quizQuestions);

// create variables for your quiz
var counter = 30;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;

// show question and choices

function loadQuestion(){
    var question = quizQuestions[currentQuestion].question;
    var choices = quizQuestions[currentQuestion.choices];
    
    $("#game").html("<h4>" + question + "</h4>")
}

loadQuestion();

// Psudeo Coding
// create timer for quiz to appear on top of quiz

// create questions for quiz (Prompts)
// create answers from variables 
// create click event for multiple choice answers
// 