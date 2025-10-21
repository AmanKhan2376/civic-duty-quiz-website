// ===== QUIZ DATA =====
// Array of 50 civic duty quiz questions related to India
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

// Function to get 20 random questions from the quizData array
function getRandomQuestions() {
    const shuffled = [...quizData]; // Copy the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
    }
    return shuffled.slice(0, 20); // Take first 20
}

// Variable to hold the questions for the current quiz attempt
let currentQuizData = [];


// ===== STATE VARIABLES =====
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let answered = false;

// ===== INITIALIZATION =====
// Initialize the quiz by setting up the total questions count
function initQuiz() {
    document.getElementById('totalQuestions').textContent = 20;
}

// ===== QUIZ NAVIGATION =====
// Start the quiz by showing the quiz page and loading the first question
function startQuiz() {
    // Pick 20 random questions
    currentQuizData = getRandomQuestions();

    // Reset state variables
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    answered = false;

    document.getElementById('homePage').style.display = 'none';
    document.getElementById('quizPage').classList.add('active');

    loadQuestion();
    initQuiz();
}

// Load the current question and display it with options
function loadQuestion() {
    const question = currentQuizData[currentQuestionIndex];
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuizData.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Render options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    // Assume not answered initially
    answered = false;

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;

        // Check if this option was previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
            answered = true; // <-- Mark answered true if already selected
        }

        // Add click event to select an option
        optionDiv.onclick = () => selectOption(index, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });

    // Update button states
    updateButtonStates();
}

// Handle option selection
function selectOption(index, element) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });

    // Mark the selected option
    element.classList.add('selected');
    userAnswers[currentQuestionIndex] = index;
    answered = true;

    // Update button states
    updateButtonStates();
}

// Move to the next question
function nextQuestion() {
    if (answered) {
        if (currentQuestionIndex < currentQuizData.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            // Quiz completed, show results
            calculateScore();
            showResults();
        }
    }
}

// Move to the previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Update the state of navigation buttons
function updateButtonStates() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Enable/disable previous button
    prevBtn.disabled = currentQuestionIndex === 0;

    // Enable/disable next button based on whether an answer is selected
    nextBtn.disabled = !answered;

    // Change next button text on last question
    if (currentQuestionIndex === currentQuizData.length - 1) {
        nextBtn.textContent = 'Finish';
    } else {
        nextBtn.textContent = 'Next';
    }
}

// ===== SCORING & RESULTS =====
// Calculate the final score
function calculateScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === currentQuizData[index].correct) {
            score++;
        }
    });
}

// Display the results page with score and message
function showResults() {
    document.getElementById('quizPage').classList.remove('active');
    document.getElementById('resultsPage').classList.add('active');

    // Display score
    document.getElementById('scoreDisplay').textContent = `${score}/${20}`;

    // Determine result message based on score
    let title, message;
    const percentage = (score / 20) * 100;

    if (percentage === 100) {
        title = "Perfect Score! 🎉";
        message = "Excellent! You have a comprehensive understanding of civic duties and responsibilities. You're a model citizen!";
    } else if (percentage >= 80) {
        title = "Excellent! 👏";
        message = "Great job! You have a strong understanding of civic duties and community responsibilities.";
    } else if (percentage >= 60) {
        title = "Good Job! 👍";
        message = "You have a solid understanding of civic duties. Keep learning more about community engagement and responsibilities.";
    } else if (percentage >= 40) {
        title = "Not Bad! 📚";
        message = "You have some understanding of civic duties. Consider learning more about voting, community service, and civic responsibilities.";
    } else {
        title = "Keep Learning! 💪";
        message = "Don't worry! Civic education is important. Review the topics and try again to improve your understanding.";
    }

    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultMessage').textContent = message;
}

// ===== RESTART FUNCTIONALITY =====
// Reset the quiz and return to home page
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    answered = false;

    document.getElementById('resultsPage').classList.remove('active');
    document.getElementById('homePage').style.display = 'block';
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initQuiz);