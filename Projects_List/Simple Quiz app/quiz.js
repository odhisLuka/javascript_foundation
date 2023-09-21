const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Rome", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the capital of Kenya?",
    options: ["Paris", "Berlin", "Rome", "Nairobi"],
    correctAnswer: "Nairobi",
  },
  {
    question: "What is the capital of Tanzania?",
    options: ["Paris", "Dar-es-Salaam", "Rome", "Zanzibar"],
    correctAnswer: "Dar-es-Salaam",
  },
  // Add more questions here...
];

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");

// Set up initial question index
let currentQuestionIndex = 0;

// Function to load a question and its options
function loadQuestion(questionIndex) {
  const question = questions[questionIndex];
  questionElement.textContent = question.question;

  // Loop through the options and set button text
  optionButtons.forEach((button, index) => {
    button.textContent = question.options[index];
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  if (selectedOption === correctAnswer) {
    // Handle correct answer (you can increase a score here, for example)
    console.log("Correct!");
  } else {
    // Handle incorrect answer
    console.log("Incorrect!");
  }

  // Move to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    // Handle quiz completion
    console.log("Quiz completed!");
  }
}

// Load the first question
loadQuestion(currentQuestionIndex);

// Add click event listeners to the option buttons
optionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const selectedOption = button.textContent;
    checkAnswer(selectedOption);
  });
});
