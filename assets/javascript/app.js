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
        showAnswer();
    } else {
        currentQuestion++;
        loadQuestion();

    }
}



// create timer for quiz to appear on top of quiz
function timesUp() {
    clearInterval(timer);

    loss++;

    preloadImage('lose');
    setTimeout(nextQuestion, 3 * 1000);
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
    $("#game").append(remainingQuestions());

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

$(document).on("click", ".choice", function () {
    clearInterval(timer);
    var answerSelect = $(this).attr('data-answer');
    var correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (correctAnswer === answerSelect) {
        score++;
        preloadImage('win');
        setTimeout(nextQuestion, 3 * 1000);
        console.log("winner")
    } else {
        loss++;
        preloadImage('lose');
        setTimeout(nextQuestion, 3 * 1000);
        console.log("Loser")
    }

    console.log("yeah!" + answerSelect);
});;

// game over results
function showAnswer() {
    var result = `
        <p>You got ${score} questions right</p>
        <p>You answered ${loss} questions incorrectly</p>
        <p>Out of a total of  ${quizQuestions.length} questions</p>
        <button class="btn btn-primary" id="reset">Reset Game</button>
    `;

    $('#game').html(result);
}



// reset button
$(document).on("click", "#reset", function () {
     counter = 5;
     currentQuestion = 0;
     score = 0;
     loss = 0;
     timer = null;

    loadQuestion();

    console.log("ResetClick")
});;

loadQuestion();

// REMAINING QUESTIONS UNDER CHOICES
function remainingQuestions() {
    const remainingQuestion = quizQuestions.length - (currentQuestion + 1);
    const totalQuestion = quizQuestions.length;

    return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;
}

function preloadImage(status) {
    var correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if(status === 'win') {
        $('#game').html("WAY TO GO RANGER! The answer was " + correctAnswer)
    } else{
        $('#game').html("WHOA! WAY OFF! The correct answer was " + correctAnswer)
    }
}

// Psudeo Coding