/* ========== SAMPLE QUIZ DATA ==========
   Replace or expand this array with your real questions.
   Each item: { question: string, options: [..], correct: index }
*/
const quizData = [
    {
        question: "What is the primary purpose of voting in India?",
        options: [
            "To ensure the government represents the people's will",
            "To guarantee a job in government",
            "To avoid paying taxes",
            "To gain special privileges"
        ],
        correct: 0
    },
    {
        question: "Which of the following is an example of environmental responsibility in India?",
        options: [
            "Ignoring pollution in your community",
            "Reducing waste and recycling materials",
            "Using as many resources as possible",
            "Avoiding outdoor activities"
        ],
        correct: 1
    },
    {
        question: "What does community service involve?",
        options: [
            "Working only for personal profit",
            "Volunteering time and effort to help others in your community",
            "Avoiding interaction with neighbors",
            "Paying taxes only"
        ],
        correct: 1
    },
    {
        question: "How can citizens participate in local government in India?",
        options: [
            "By attending gram sabha or town hall meetings",
            "By ignoring local issues",
            "By only voting in national elections",
            "By refusing to pay local taxes"
        ],
        correct: 0
    },
    {
        question: "What is jury duty in India?",
        options: [
            "A punishment for breaking the law",
            "Currently not implemented in India",
            "A way to earn extra money",
            "An optional activity for wealthy citizens"
        ],
        correct: 1
    },
    {
        question: "Which Indian law requires citizens to pay taxes?",
        options: [
            "Income Tax Act",
            "Right to Information Act",
            "Indian Penal Code",
            "Environment Protection Act"
        ],
        correct: 0
    },
    {
        question: "Which of the following is a fundamental duty in India?",
        options: [
            "Respect the Constitution, National Flag and National Anthem",
            "Avoid paying taxes",
            "Travel abroad frequently",
            "Run for government office"
        ],
        correct: 0
    },
    {
        question: "What is the minimum voting age in India?",
        options: [
            "16 years",
            "18 years",
            "21 years",
            "25 years"
        ],
        correct: 1
    },
    {
        question: "Which Indian organization monitors environmental protection?",
        options: [
            "Election Commission",
            "Central Pollution Control Board",
            "Supreme Court",
            "Reserve Bank of India"
        ],
        correct: 1
    },
    {
        question: "Which act guarantees the right to education in India?",
        options: [
            "Right to Education Act",
            "Indian Penal Code",
            "Companies Act",
            "Income Tax Act"
        ],
        correct: 0
    },
    {
        question: "Which of these is a responsibility of Indian citizens?",
        options: [
            "Abiding by the Constitution and laws",
            "Ignoring government rules",
            "Running private armies",
            "Evading taxes"
        ],
        correct: 0
    },
    {
        question: "What is the role of the Election Commission of India?",
        options: [
            "Conduct free and fair elections",
            "Collect taxes",
            "Manage banks",
            "Pass new laws"
        ],
        correct: 0
    },
    {
        question: "What is a Lok Sabha member's responsibility?",
        options: [
            "Legislating and representing the people",
            "Managing banks",
            "Running local businesses",
            "Serving in the army"
        ],
        correct: 0
    },
    {
        question: "Which of the following is an example of civic responsibility?",
        options: [
            "Planting trees and keeping surroundings clean",
            "Avoiding voting",
            "Littering streets",
            "Breaking laws intentionally"
        ],
        correct: 0
    },
    {
        question: "How can citizens of India report corruption?",
        options: [
            "Through anti-corruption helplines and RTI",
            "Ignoring the issue",
            "By spreading rumors",
            "Paying bribes to officials"
        ],
        correct: 0
    },
    {
        question: "Which Indian amendment added fundamental duties for citizens?",
        options: [
            "42nd Amendment",
            "73rd Amendment",
            "86th Amendment",
            "44th Amendment"
        ],
        correct: 0
    },
    {
        question: "Which of these is a way to support public health in India?",
        options: [
            "Getting vaccinated and following hygiene practices",
            "Ignoring medical advice",
            "Avoiding hospitals",
            "Selling medicines illegally"
        ],
        correct: 0
    },
    {
        question: "Which of the following is a right provided under the Indian Constitution?",
        options: [
            "Right to equality",
            "Right to ignore laws",
            "Right to break traffic rules",
            "Right to avoid civic duties"
        ],
        correct: 0
    },
    {
        question: "What is Swachh Bharat Abhiyan?",
        options: [
            "A nationwide cleanliness campaign",
            "A financial scheme",
            "A festival celebration",
            "A political party"
        ],
        correct: 0
    },
    {
        question: "Which authority governs traffic rules in India?",
        options: [
            "State Transport Department",
            "Supreme Court",
            "RBI",
            "Election Commission"
        ],
        correct: 0
    },
    {
        question: "Which of these is a way to conserve water in India?",
        options: [
            "Fixing leaks and rainwater harvesting",
            "Wasting water",
            "Ignoring water scarcity",
            "Dumping waste in rivers"
        ],
        correct: 0
    },
    {
        question: "Which body implements education policies in India?",
        options: [
            "Ministry of Education",
            "Election Commission",
            "RBI",
            "Supreme Court"
        ],
        correct: 0
    },
    {
        question: "Which responsibility involves voting in elections?",
        options: [
            "Political responsibility",
            "Financial responsibility",
            "Environmental responsibility",
            "None of the above"
        ],
        correct: 0
    },
    {
        question: "Which Indian law protects citizens’ rights to information?",
        options: [
            "Right to Information Act",
            "Income Tax Act",
            "Companies Act",
            "Environment Protection Act"
        ],
        correct: 0
    },
    {
        question: "Which of these is a responsibility toward national heritage?",
        options: [
            "Preserving monuments and traditions",
            "Destroying historical sites",
            "Ignoring festivals",
            "Selling heritage illegally"
        ],
        correct: 0
    },
    {
        question: "What is the role of a citizen during a natural disaster?",
        options: [
            "Helping affected people and following safety instructions",
            "Running away and ignoring safety",
            "Collecting donations illegally",
            "Avoiding rescue efforts"
        ],
        correct: 0
    },
    {
        question: "Which act governs child labor prohibition in India?",
        options: [
            "Child Labour (Prohibition and Regulation) Act",
            "Companies Act",
            "Income Tax Act",
            "Right to Education Act"
        ],
        correct: 0
    },
    {
        question: "Which of these actions shows environmental responsibility?",
        options: [
            "Planting trees",
            "Dumping plastic in rivers",
            "Cutting trees recklessly",
            "Using excessive water"
        ],
        correct: 0
    },
    {
        question: "Which Indian authority regulates banking and currency?",
        options: [
            "Reserve Bank of India",
            "Election Commission",
            "Supreme Court",
            "Ministry of Education"
        ],
        correct: 0
    },
    {
        question: "Which of these is an example of social responsibility?",
        options: [
            "Volunteering for community welfare",
            "Ignoring needy people",
            "Avoiding taxes",
            "Breaking laws intentionally"
        ],
        correct: 0
    },
    {
        question: "Which Indian campaign promotes digital literacy?",
        options: [
            "Digital India",
            "Swachh Bharat",
            "Make in India",
            "Skill India"
        ],
        correct: 0
    },
    {
        question: "Which of these actions is part of responsible citizenship?",
        options: [
            "Obeying laws and respecting others' rights",
            "Bribing officials",
            "Littering streets",
            "Avoiding taxes"
        ],
        correct: 0
    },
    {
        question: "Which body in India protects human rights?",
        options: [
            "National Human Rights Commission",
            "RBI",
            "Supreme Court",
            "Election Commission"
        ],
        correct: 0
    },
    {
        question: "Which of these is a way to fight corruption in India?",
        options: [
            "Reporting corruption and following legal processes",
            "Paying bribes",
            "Ignoring wrongdoing",
            "Manipulating records"
        ],
        correct: 0
    },
    {
        question: "Which Indian initiative promotes renewable energy?",
        options: [
            "National Solar Mission",
            "Make in India",
            "Digital India",
            "Skill India"
        ],
        correct: 0
    },
    {
        question: "Which of these shows civic responsibility during elections?",
        options: [
            "Voting and encouraging others to vote",
            "Intimidating voters",
            "Spreading false news",
            "Avoiding voting"
        ],
        correct: 0
    },
    {
        question: "Which is a duty under the Indian Constitution regarding environment?",
        options: [
            "Protecting and improving natural environment",
            "Polluting rivers",
            "Cutting trees without permission",
            "Using plastics excessively"
        ],
        correct: 0
    },
    {
        question: "Which Indian law aims to protect women from domestic violence?",
        options: [
            "Protection of Women from Domestic Violence Act",
            "Child Labour Act",
            "Companies Act",
            "Right to Education Act"
        ],
        correct: 0
    },
    {
        question: "Which is a way for Indian citizens to engage in governance?",
        options: [
            "Participating in local committees and public discussions",
            "Ignoring government",
            "Avoiding taxes",
            "Bribing officials"
        ],
        correct: 0
    },
    {
        question: "Which campaign in India encourages cleanliness and hygiene?",
        options: [
            "Swachh Bharat Abhiyan",
            "Digital India",
            "Skill India",
            "Make in India"
        ],
        correct: 0
    },
    {
        question: "Which is a responsibility of Indian citizens toward society?",
        options: [
            "Respecting elders and helping the needy",
            "Ignoring social issues",
            "Breaking traffic rules",
            "Avoiding taxes"
        ],
        correct: 0
    },
    {
        question: "Which act ensures free and compulsory education in India?",
        options: [
            "Right to Education Act",
            "Companies Act",
            "Income Tax Act",
            "Indian Penal Code"
        ],
        correct: 0
    },
    {
        question: "Which of the following is an example of ethical behavior in India?",
        options: [
            "Paying taxes honestly and helping others",
            "Cheating in exams",
            "Avoiding civic duties",
            "Littering streets"
        ],
        correct: 0
    },
    {
        question: "Which Indian authority monitors environmental laws?",
        options: [
            "Central Pollution Control Board",
            "Election Commission",
            "RBI",
            "Supreme Court"
        ],
        correct: 0
    },
    {
        question: "Which campaign encourages plantation and forest protection in India?",
        options: [
            "National Afforestation Programme",
            "Digital India",
            "Make in India",
            "Skill India"
        ],
        correct: 0
    },
    {
        question: "Which action is part of being a responsible citizen in India?",
        options: [
            "Following laws, voting, and helping society",
            "Evading taxes",
            "Breaking laws intentionally",
            "Ignoring civic responsibilities"
        ],
        correct: 0
    },
    {
        question: "Which Indian initiative promotes financial literacy?",
        options: [
            "RBI’s Financial Education Program",
            "Digital India",
            "Make in India",
            "Swachh Bharat"
        ],
        correct: 0
    },
    {
        question: "Which of these shows responsibility toward public property in India?",
        options: [
            "Not vandalizing and maintaining public spaces",
            "Damaging parks",
            "Littering roads",
            "Polluting public areas"
        ],
        correct: 0
    }
];

/* ========== CONFIG ========== */
const DESIRED_QUESTIONS = 20; // will use min(DESIRED_QUESTIONS, quizData.length)

/* ======= STATE ======== */
let currentQuizData = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // stores selected option index or undefined
let answered = false;

/* ======= CACHED DOM ======== */
const homePage = document.getElementById('homePage');
const quizPage = document.getElementById('quizPage');
const resultsPage = document.getElementById('resultsPage');

const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const homeBtn = document.getElementById('homeBtn');

const questionText = document.getElementById('questionText');
const currentQuestionEl = document.getElementById('currentQuestion');
const totalQuestionsEl = document.getElementById('totalQuestions');
const progressFill = document.getElementById('progressFill');
const optionsContainer = document.getElementById('optionsContainer');

const scoreDisplay = document.getElementById('scoreDisplay');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const reviewWrapper = document.getElementById('reviewWrapper');

/* ======= UTILITIES ======== */
function shuffleArray(arr) {
    // Fisher-Yates
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getRandomQuestions() {
    if (!Array.isArray(quizData) || quizData.length === 0) return [];
    const shuffled = shuffleArray(quizData);
    const count = Math.min(DESIRED_QUESTIONS, shuffled.length);
    return shuffled.slice(0, count);
}

/* ======= INIT ======== */
function initQuiz() {
    totalQuestionsEl.textContent = DESIRED_QUESTIONS <= quizData.length ? DESIRED_QUESTIONS : quizData.length;
}

/* ======= START / LOAD ======== */
function startQuiz() {
    currentQuizData = getRandomQuestions();
    if (!Array.isArray(currentQuizData) || currentQuizData.length === 0) {
        alert('Quiz data missing — please provide questions.');
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(currentQuizData.length);
    answered = false;

    // UI toggles
    homePage.classList.remove('active');
    homePage.style.display = 'none';
    resultsPage.classList.remove('active');
    resultsPage.style.display = 'none';

    quizPage.classList.add('active');
    quizPage.style.display = 'block';
    totalQuestionsEl.textContent = currentQuizData.length;

    loadQuestion();
    updateButtonStates();
}

/* ======= RENDER QUESTION ======== */
function loadQuestion() {
    const q = currentQuizData[currentQuestionIndex];
    if (!q) return;

    questionText.textContent = q.question;
    currentQuestionEl.textContent = currentQuestionIndex + 1;

    // progress
    const progress = ((currentQuestionIndex + 1) / currentQuizData.length) * 100;
    progressFill.style.width = progress + '%';

    // render options
    optionsContainer.innerHTML = '';
    answered = userAnswers[currentQuestionIndex] !== undefined;

    q.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option';
        btn.setAttribute('role', 'listitem');
        btn.setAttribute('aria-pressed', 'false');
        btn.tabIndex = 0;
        btn.innerHTML = `${idx + 1}. ${optText}`;

        // restore selection
        if (userAnswers[currentQuestionIndex] === idx) {
            btn.classList.add('selected');
            btn.setAttribute('aria-pressed', 'true');
        }

        btn.addEventListener('click', () => {
            selectOption(idx);
        });

        // allow keyboard selection when focused
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectOption(idx);
            }
        });

        optionsContainer.appendChild(btn);
    });

    updateButtonStates();
}

/* ======= SELECT OPTION ======== */
function selectOption(optionIndex) {
    // remove previous selection visual
    document.querySelectorAll('.option').forEach((o, i) => {
        o.classList.remove('selected', 'correct', 'incorrect');
        o.setAttribute('aria-pressed', 'false');
    });

    // mark new selection
    const optionEls = optionsContainer.querySelectorAll('.option');
    if (optionEls[optionIndex]) {
        optionEls[optionIndex].classList.add('selected');
        optionEls[optionIndex].setAttribute('aria-pressed', 'true');
    }

    userAnswers[currentQuestionIndex] = optionIndex;
    answered = true;
    updateButtonStates();
}

/* ======= NAVIGATION ======== */
function nextQuestion() {
    if (!answered) return; // guard
    if (currentQuestionIndex < currentQuizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        calculateScore();
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function updateButtonStates() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = !answered;
    nextBtn.textContent = currentQuestionIndex === currentQuizData.length - 1 ? 'Finish' : 'Next';
}

/* ======= SCORING & RESULTS ======== */
function calculateScore() {
    score = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans === currentQuizData[idx].correct) score++;
    });
}

function showResults() {
    quizPage.classList.remove('active');
    quizPage.style.display = 'none';

    resultsPage.classList.add('active');
    resultsPage.style.display = 'block';

    scoreDisplay.textContent = `${score}/${currentQuizData.length}`;

    const percentage = (score / currentQuizData.length) * 100;
    if (percentage === 100) {
        resultTitle.textContent = "Perfect Score! 🎉";
        resultMessage.textContent = "Excellent! You have a comprehensive understanding of civic duties.";
    } else if (percentage >= 80) {
        resultTitle.textContent = "Excellent! 👏";
        resultMessage.textContent = "Strong understanding of civic duties and community responsibilities.";
    } else if (percentage >= 60) {
        resultTitle.textContent = "Good Job! 👍";
        resultMessage.textContent = "Solid understanding. Keep learning more about civic engagement.";
    } else if (percentage >= 40) {
        resultTitle.textContent = "Not Bad! 📚";
        resultMessage.textContent = "Some understanding. Study civic duties and responsibilities further.";
    } else {
        resultTitle.textContent = "Keep Learning! 💪";
        resultMessage.textContent = "Review civic education topics and try again to improve.";
    }

    renderReview();
}

/* Efficient review rendering using template join */
function renderReview() {
    // remove old content
    reviewWrapper.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'review-container';

    const html = currentQuizData.map((q, i) => {
        const userAns = userAnswers[i];
        const correctIdx = q.correct;
        const isCorrect = userAns === correctIdx;

        const userText = userAns !== undefined ? escapeHtml(q.options[userAns]) : '<em>Not answered</em>';
        const correctText = escapeHtml(q.options[correctIdx]);

        return `
      <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
        <div class="review-question">${i + 1}. ${escapeHtml(q.question)}</div>
        <div class="review-answer">
          ${isCorrect
                ? `<strong>✅ Your answer:</strong> ${userText}`
                : `<strong>❌ Your answer:</strong> ${userText}<br><strong>✔ Correct answer:</strong> ${correctText}`
            }
        </div>
      </div>`;
    }).join('');

    container.innerHTML = html;
    reviewWrapper.appendChild(container);
}

/* Basic HTML escaping to avoid injection if questions come from external source */
function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

/* ======= RESTART / HOME ======== */
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    answered = false;

    resultsPage.classList.remove('active');
    resultsPage.style.display = 'none';

    homePage.style.display = 'block';
    homePage.classList.add('active');
}

function backToHome() {
    // same as restart but keep page visible
    restartQuiz();
}

/* ======= KEYBOARD SHORTCUTS ======== */
document.addEventListener('keydown', (e) => {
    // don't interfere with typing if focus is an input (none here but safe)
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    if (e.key === 'ArrowRight') {
        // next if available
        if (!nextBtn.disabled) nextQuestion();
    } else if (e.key === 'ArrowLeft') {
        if (!prevBtn.disabled) previousQuestion();
    } else if (e.key === 'Enter') {
        // if on options container focus, try next
        if (!nextBtn.disabled) nextQuestion();
    } else if (/^[1-9]$/.test(e.key)) {
        // number key to select option 1..9
        const num = parseInt(e.key, 10);
        const optEls = optionsContainer.querySelectorAll('.option');
        if (num >= 1 && num <= optEls.length) {
            optEls[num - 1].focus();
            optEls[num - 1].click();
        }
    }
});

/* ======= EVENT BINDINGS ======== */
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', previousQuestion);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
homeBtn.addEventListener('click', backToHome);

/* init on DOM ready */
window.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    // show home by default
    homePage.classList.add('active');
    homePage.style.display = 'block';
});
