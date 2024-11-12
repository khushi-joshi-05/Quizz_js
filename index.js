const quizData = [
    {
        "question": "What is the output of the following Python code?\nprint(2 + 3 * 4)",
        "options": [
            "20",
            "14",
            "12",
            "10"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following HTML tags is used to create a hyperlink?",
        "options": [
            "<a>",
            "<link>",
            "<href>",
            "<hyperlink>"
        ],
        "correct": 0
    },
    {
        "question": "What is the correct syntax to create a function in JavaScript?",
        "options": [
            "function myFunction {}",
            "function: myFunction {}",
            "function myFunction() {}",
            "function = myFunction() {}"
        ],
        "correct": 2
    },
    {
        "question": "In CSS, how do you select an element with the id \"header\"?",
        "options": [
            ".header",
            "#header",
            "*header",
            "header"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is not a valid variable name in Python?",
        "options": [
            "my_var",
            "2ndVar",
            "var_2",
            "myVar"
        ],
        "correct": 1
    }
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const option_1 = document.querySelector("#option_1");
const option_2 = document.querySelector("#option_2");
const option_3 = document.querySelector("#option_3");
const option_4 = document.querySelector("#option_4");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    option_1.innerText = currentQuizData.options[0];
    option_2.innerText = currentQuizData.options[1];
    option_3.innerText = currentQuizData.options[2];
    option_4.innerText = currentQuizData.options[3];
};

const deselectAnswers = () => {
    answerEls.forEach(answerEl => answerEl.checked = false);
};

const getSelected = () => {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
};

submitBtn.addEventListener("click", () => {
    const selectedAnswer = getSelected();
    console.log('Selected Answer ID:', selectedAnswer);
    if (selectedAnswer) {
        const selectedOption = Array.from(answerEls).findIndex(answerEl => answerEl.checked);
        console.log('Selected Option Index:', selectedOption);
        if (selectedOption === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.querySelector("#quiz").innerHTML =  `
            <div class="result">
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button id="reload" onclick="location.reload()">Reload</button>
            </div>
        `;
        }
    }
});

loadQuiz();
