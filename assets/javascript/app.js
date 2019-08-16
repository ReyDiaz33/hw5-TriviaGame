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
var loss = 0;
var timer;



// Times up and goes to next question
function nextQuestion() {
    var noMoreQuestions = (quizQuestions.length - 1) === currentQuestion;
    if (noMoreQuestions) {
        console.log("Game Over!");
    } else {
        currentQuestion++;
        loadQuestion();
    }
}



// create timer for quiz to appear on top of quiz
function timesUp() {
    clearInterval(timer);

    loss++;
    nextQuestion();
}


function countDown() {
    counter--;
    $("#timer").html("Timer: " + counter);

    if (counter === 0) {
        timesUp();
    }
}

// show question and choices
function loadQuestion() {
    counter = 15;
    timer = setInterval(countDown, 1000);


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
// create click event for multiple choice answers

$(document).on("click", ".choice", function(){
    clearInterval(timer);
    var answerSelect = $(this).attr('data-answer');
    var correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    
    if( correctAnswer === answerSelect){
        score++;
        nextQuestion();
        console.log("winner")
    } else {
        loss++;
        nextQuestion();
        console.log("Loser")
    }
    
    console.log("yeah!" + answerSelect);
});;


loadQuestion();

// Psudeo Coding
