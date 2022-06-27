var questions = [{
    question: "What is the baby of a Moth known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3
}, {
    question: "What is the young of a buffalo called?",
    choices: ["baby", "calf", "pup", "cow"],
    correctAnswer: 1
}, {
    question: "What is a baby aligator called?",
    choices: ["baby", "gator", "hatchling", "calf"],
    correctAnswer: 2
}];

var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;

$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find('.quizMessage').hide();
    $(this).find('.nextButton').on('click', function () {
        if (!quizOver) {
            value = $('input[type="radio"]:checked').val();
            if (value == undefined) {
                $(document).find('.quizMessage').text('Please select an answer');
                $(document).find('.quizMessage').show();
            } else {
                $(document).find('.quizMessage').hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore()
                    $(document).find('.nextButton').text('Play Again');
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find('.nextButton').text('Next Question');
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {
    console.log('In display current question');

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find('.quizContainer > .question');
    var choiceList = $(document).find('.quizContainer > .choiceList');
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <l1> elements (if any)
    $(choiceList).find('li').remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value =" + i + " name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}
    function resetQuiz() {
        currentQuestion = 0;
        correctAnswer = 0;
        hideScore();
    }

    function displayScore() {
        $(document).find('.quizContainer > .result').text('You scored: ' + correctAnswer + ' out of: ' + questions.length);
        $(document).find('.quizContainer > .result').show();
    }

    function hideScore() {
        $(document).find('.result').hide();
    }