const question = [
    {
        question: "Which is large animal in the world",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "What is the capital of France",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Rome", correct: false },
            { text: "Paris", correct: true },
        ]
    },
    {
        question: "What is the largest planet in our solar system",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Venus", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "What is the most widely spoken language in the world",
        answers: [
            { text: "French", correct: false },
            { text: "Blue Spanish", correct: false },
            { text: "English", correct: true },
            { text: "German", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function starQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}