const questions = [
  {
    question: "Which keyword declares a constant variable?",
    answers: ["let", "var", "const", "function"],
    correct: "const",
  },
  {
    question: "Which method adds an item to the end of an array?",
    answers: ["push", "pop", "shift", "slice"],
    correct: "push",
  },
  {
    question: "Which company created JavaScript?",
    answers: ["Google", "Microsoft", "Netscape", "Apple"],
    correct: "Netscape",
  },
  {
    question: "What does DOM stand for?",
    answers: [
      "Document Object Model",
      "Data Object Model",
      "Document Order Method",
      "Data Order Method",
    ],
    correct: "Document Object Model",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["//", "**", "<!--", "##"],
    correct: "//",
  },
  {
    question: "Which method converts JSON into an object?",
    answers: ["JSON.parse", "JSON.stringify", "JSON.convert", "JSON.object"],
    correct: "JSON.parse",
  },
  {
    question: "Which keyword creates a function?",
    answers: ["loop", "func", "function", "create"],
    correct: "function",
  },
  {
    question: "Which operator checks value and type?",
    answers: ["==", "=", "===", "!="],
    correct: "===",
  },
  {
    question: "What is the result of 2 + '2'?",
    answers: ["4", "22", "Error", "undefined"],
    correct: "22",
  },
  {
    question: "Which method removes the last item from an array?",
    answers: ["shift", "slice", "push", "pop"],
    correct: "pop",
  },
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const bestScoreElement = document.getElementById("best-score");
const reviewList = document.getElementById("review-list");
const restartButton = document.getElementById("restart-btn");

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let selectedAnswer = null;
nextButton.disabled = true;

showQuestion();

function showQuestion() {
  const question = questions[currentQuestion];

  questionElement.textContent = question.question;

  answersElement.innerHTML = "";

  selectedAnswer = null;
  nextButton.disabled = true;

  progressText.textContent = `${currentQuestion + 1} / ${questions.length}`;

  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;

    button.className =
      "p-4 border-2 border-stone-200 rounded-xl text-left font-medium hover:bg-stone-100 hover:border-emerald-500 transition cursor-pointer";

    button.addEventListener("click", () => {
      selectedAnswer = answer;

      nextButton.disabled = false;

      document.querySelectorAll("#answers button").forEach((btn) => {
        btn.classList.remove("border-emerald-600", "bg-emerald-50");
      });

      button.classList.add("border-emerald-600", "bg-emerald-50");
    });

    answersElement.appendChild(button);
  });
}

function showResults() {
  quizContainer.classList.add("hidden");

  resultContainer.classList.remove("hidden");

  scoreElement.textContent = `Your Score: ${score}/${questions.length}`;

  const bestScore = Number(localStorage.getItem("bestScore")) || 0;

  if (score > bestScore) {
    localStorage.setItem("bestScore", score);
  }

  bestScoreElement.textContent = `Best Score: ${localStorage.getItem(
    "bestScore",
  )}/${questions.length}`;

  reviewList.innerHTML = "";

  userAnswers.forEach((item) => {
    const reviewItem = document.createElement("div");

    const isCorrect = item.selected === item.correct;

    reviewItem.className = `
      p-4
      rounded-xl
      border
      ${
        isCorrect
          ? "border-emerald-500 bg-emerald-50"
          : "border-red-500 bg-red-50"
      }
      `;

    reviewItem.innerHTML = `
      <p class="font-semibold">
        ${item.question}
      </p>

      <p>
        Your Answer:
        ${item.selected}
      </p>

      <p>
        Correct Answer:
        ${item.correct}
      </p>
    `;

    reviewList.appendChild(reviewItem);
  });
}

nextButton.addEventListener("click", () => {
  if (!selectedAnswer) {
    alert("Please select an answer first.");
    return;
  }

  if (selectedAnswer === questions[currentQuestion].correct) {
    score++;
  }

  userAnswers.push({
    question: questions[currentQuestion].question,
    selected: selectedAnswer,
    correct: questions[currentQuestion].correct,
  });

  currentQuestion++;
  selectedAnswer = null;

  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }

  showQuestion();
});

restartButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];

  resultContainer.classList.add("hidden");

  quizContainer.classList.remove("hidden");

  showQuestion();
});
