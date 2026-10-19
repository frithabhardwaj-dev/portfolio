const questions = [
  {
    question: "What does a large language model actually predict?",
    options: [
      "The next token",
      "The entire paragraph",
      "The final answer",
      "The user's intention",
    ],
    correct: "The next token",
  },
  {
    question: "In the commit-message format used in this course, what comes before the colon?",
    options: [
      "The type, such as feat or fix",
      "The filename",
      "The programmer name",
      "The date",
    ],
    correct: "The type, such as feat or fix",
  },
  {
    question: "What must a unit test do before the bug is fixed?",
    options: ["Fail", "Pass", "Stop running", "Delete the code"],
    correct: "Fail",
  },
  {
    question: "Where should the styling for a webpage live?",
    options: [
      "In a separate CSS file",
      "Inside Python",
      "Inside the browser console",
      "Inside a text file",
    ],
    correct: "In a separate CSS file",
  },
  {
    question: "What does a loop inside another loop usually mean for time complexity?",
    options: [
      "It is quadratic",
      "It is constant",
      "It is logarithmic",
      "It has no complexity",
    ],
    correct: "It is quadratic",
  },
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

let currentIndex = 0;
let score = 0;

function showQuestion() {
  const item = questions[currentIndex];
  questionEl.textContent = item.question;
  optionsEl.textContent = "";

  item.options.forEach(function (optionText) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.textContent = optionText;
    button.addEventListener("click", function () {
      handleAnswer(optionText);
    });
    optionsEl.appendChild(button);
  });
}

function handleAnswer(selected) {
  if (selected === questions[currentIndex].correct) {
    score += 1;
  }

  currentIndex += 1;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  optionsEl.textContent = "";
  questionEl.textContent = "Quiz Complete";
  resultEl.hidden = false;
  resultEl.textContent = "Your score is " + score + " out of 5";
}

showQuestion();
