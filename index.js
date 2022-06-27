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