const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

const questions = [
    {
        question: 'Qual é a capital do Brasil?',
        answers: [
            { text: 'Brasília', correct: true },
            { text: 'Rio de Janeiro', correct: false },
            { text: 'São Paulo', correct: false },
            { text: 'Salvador', correct: false }
        ]
    },
    {
        question: 'Qual é a maior montanha do mundo?',
        answers: [
            { text: 'K2', correct: false },
            { text: 'Kilimanjaro', correct: false },
            { text: 'Everest', correct: true },
            { text: 'Aconcágua', correct: false }
        ]
    },
    {
        question: 'Qual é o elemento químico com símbolo O?',
        answers: [
            { text: 'Ouro', correct: false },
            { text: 'Oxigênio', correct: true },
            { text: 'Ósmio', correct: false },
            { text: 'Oganessônio', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;

startButton.addEventListener('click', startGame);

function startGame() {
    currentQuestionIndex = 0;
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}


function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        alert('Correto!');
    } else {
        alert('Incorreto!');
    }
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        alert('Fim do jogo!');
        startButton.classList.remove('hide');
        questionContainer.classList.add('hide');
    }
});