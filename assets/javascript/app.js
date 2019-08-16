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
function loadQuestion() {
    counter = 30;


    var question = quizQuestions[currentQuestion].question;
    var choices = quizQuestions[currentQuestion].choices;
    $("#timer").html("Timer: " + counter);
    $("#game").html("<h4>" + question + "</h4>");
    $("#game").append(loadChoices(choices));
    console.log(choices)
}

function loadChoices(choices) {
    var result = "";

    for (var i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }

    return result;

}
loadQuestion();

// Psudeo Coding
// create timer for quiz to appear on top of quiz

// create questions for quiz (Prompts)
// create answers from variables 
// create click event for multiple choice answers