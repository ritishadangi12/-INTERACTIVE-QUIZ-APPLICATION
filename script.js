// Array of question objects
const questions = [
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mathura", correct: false },
            { text: "Chennai", correct: false },
            { text: "New delhi", correct: true },
            { text: "Mumbai", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Rhinoceros", correct: false }
        ]
    },
    {
        question: "What is the smallest unit of life?",
        answers: [
            { text: "Atom", correct: false },
            { text: "Molecule", correct: false },
            { text: "Cell", correct: true },
            { text: "Organ", correct: false }
        ]
    }
];

let currentQuestionIndex = 0; // Index of the current question
let score = 0; // User's score

document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-button');
    const quizContainer = document.getElementById('quiz-container');
    const scoreContainer = document.getElementById('score-container');
    const scoreText = document.getElementById('score-text');
    const restartButton = document.getElementById('restart-button');

    // Initialize the quiz
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.classList.add('hide');
        scoreContainer.classList.add('hide');
        quizContainer.classList.remove('hide');
        showQuestion();
    }

    // Display the current question and answers
    function showQuestion() {
        resetState();
        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.innerText = currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            button.dataset.correct = answer.correct;
            button.addEventListener('click', selectAnswer);
            answerButtons.appendChild(button);
        });
    }

    // Reset the answer buttons
    function resetState() {
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    // Handle the answer selection
    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true';
        if (correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    // Display the user's score and hide the quiz elements
    function showScore() {
        scoreText.innerText = `You scored ${score} out of ${questions.length}`;
        quizContainer.classList.add('hide');
        scoreContainer.classList.remove('hide');
    }

    // Restart the quiz when the restart button is clicked
    restartButton.addEventListener('click', startQuiz);

    // Start the quiz when the page loads
    startQuiz();
});
