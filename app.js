const quizData = [
    { question: "Who was the first Emperor of the Maurya Dynasty?", a: "Ashoka", b: "Chandragupta Maurya", c: "Bindusara", d: "Harsha", correct: "b" },
    { question: "What is the ancient name of Patna?", a: "Pataliputra", b: "Hastinapur", c: "Magadha", d: "Ayodhya", correct: "a" },
    { question: "Which Indian King is famous for the Kalinga War?", a: "Ashoka", b: "Chandragupta Maurya", c: "Samudragupta", d: "Akbar", correct: "a" },
    { question: "Name the book written by Chanakya (Kautilya).", a: "Arthashastra", b: "Mahabharata", c: "Ramayana", d: "Bhagavad Gita", correct: "a" },
    { question: "Who was the founder of the Gupta Empire?", a: "Chandragupta Maurya", b: "Chandragupta I", c: "Samudragupta", d: "Harshavardhana", correct: "b" },
    { question: "During which period did the Harappan Civilization flourish?", a: "1500-500 BCE", b: "500-1000 CE", c: "2600-1900 BCE", d: "1200-800 BCE", correct: "c" },
    { question: "Name the Indian ruler who defeated Alexander the Great.", a: "Chandragupta Maurya", b: "Porus", c: "Ashoka", d: "Bindusara", correct: "b" },
    { question: "Which Mughal Emperor built the Taj Mahal?", a: "Akbar", b: "Aurangzeb", c: "Jahangir", d: "Shah Jahan", correct: "d" },
    { question: "Who was the last Governor-General of independent India?", a: "Rajagopalachari", b: "Lord Mountbatten", c: "Jawaharlal Nehru", d: "Vallabhbhai Patel", correct: "a" },
    { question: "Who was the first President of India?", a: "Jawaharlal Nehru", b: "S. Radhakrishnan", c: "Rajendra Prasad", d: "Zakir Husain", correct: "c" },
    { question: "In which year did India gain independence from British rule?", a: "1942", b: "1945", c: "1947", d: "1950", correct: "c" },
    { question: "Who is known as the 'Father of the Indian Constitution'?", a: "Mahatma Gandhi", b: "B.R. Ambedkar", c: "Jawaharlal Nehru", d: "Sardar Patel", correct: "b" },
    { question: "What is the ancient name of Varanasi?", a: "Kashi", b: "Ayodhya", c: "Mathura", d: "Hastinapur", correct: "a" },
    { question: "Who led the Dandi March in 1930?", a: "Subhas Chandra Bose", b: "Jawaharlal Nehru", c: "Mahatma Gandhi", d: "Bal Gangadhar Tilak", correct: "c" },
    { question: "Name the Indian king who embraced Buddhism after a great war.", a: "Harshavardhana", b: "Ashoka", c: "Chandragupta Maurya", d: "Bindusara", correct: "b" },
    { question: "Which empire did King Harsha rule?", a: "Gupta Empire", b: "Maurya Empire", c: "Mughal Empire", d: "Vardhana Dynasty", correct: "d" },
    { question: "Who was the founder of the Mughal Empire in India?", a: "Babur", b: "Akbar", c: "Humayun", d: "Jahangir", correct: "a" },
    { question: "What is the significance of the year 1857 in Indian history?", a: "Formation of Indian National Congress", b: "First War of Indian Independence", c: "Birth of Mahatma Gandhi", d: "Partition of Bengal", correct: "b" },
    { question: "Name the famous Indian freedom fighter known for his slogan 'Give me blood, and I shall give you freedom'.", a: "Mahatma Gandhi", b: "Subhas Chandra Bose", c: "Jawaharlal Nehru", d: "Bhagat Singh", correct: "b" },
    { question: "Who was the first woman Prime Minister of India?", a: "Indira Gandhi", b: "Sarojini Naidu", c: "Pratibha Patil", d: "Sonia Gandhi", correct: "a" },
    { question: "What is the ancient Indian text on dance and performance?", a: "Arthashastra", b: "Natyashastra", c: "Ramayana", d: "Mahabharata", correct: "b" },
    { question: "Who wrote the national anthem of India?", a: "Rabindranath Tagore", b: "Bankim Chandra Chatterjee", c: "Sarojini Naidu", d: "Subramania Bharati", correct: "a" },
    { question: "Which Indian leader is known as the 'Iron Man of India'?", a: "Jawaharlal Nehru", b: "B.R. Ambedkar", c: "Sardar Patel", d: "Lal Bahadur Shastri", correct: "c" },
    { question: "Which ancient university was located in Bihar and was a renowned center of learning?", a: "Nalanda", b: "Takshashila", c: "Vikramashila", d: "Kanchipuram", correct: "a" },
    { question: "Name the first Indian to win a Nobel Prize.", a: "C.V. Raman", b: "Rabindranath Tagore", c: "Mother Teresa", d: "Hargobind Khorana", correct: "b" },
    { question: "Which movement did Mahatma Gandhi lead in 1942?", a: "Civil Disobedience Movement", b: "Non-Cooperation Movement", c: "Quit India Movement", d: "Salt Satyagraha", correct: "c" },
    { question: "Who is known as the 'Nightingale of India'?", a: "Indira Gandhi", b: "Sarojini Naidu", c: "Lata Mangeshkar", d: "M.S. Subbulakshmi", correct: "b" },
    { question: "What was the capital of the Vijayanagara Empire?", a: "Madurai", b: "Kanchipuram", c: "Hampi", d: "Mysore", correct: "c" },
    { question: "Who was the first Indian woman to go to space?", a: "Kalpana Chawla", b: "Sunita Williams", c: "Ritu Karidhal", d: "Tessy Thomas", correct: "a" },
    { question: "What was the name of the treaty that ended the First Anglo-Maratha War?", a: "Treaty of Salbai", b: "Treaty of Purandar", c: "Treaty of Bassein", d: "Treaty of Srirangapatna", correct: "a" }
];

let index = 0;
let correct = 0;
let wrong = 0;
const total = quizData.length;
const quesBox = document.getElementById("questionBox");
const optionInputs = document.querySelectorAll("input[name='option']");
const submitButton = document.getElementById("submit");

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = quizData[index];
    quesBox.innerHTML = `${index + 1}) ${data.question}`;
    optionInputs[0].nextElementSibling.innerHTML = data.a;
    optionInputs[1].nextElementSibling.innerHTML = data.b;
    optionInputs[2].nextElementSibling.innerHTML = data.c;
    optionInputs[3].nextElementSibling.innerHTML = data.d;
    submitButton.disabled = true; // Disable the submit button initially
};

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const showFeedback = (isCorrect, correctAnswer) => {
    const feedbackBox = document.createElement("div");
    feedbackBox.className = "feedback";
    feedbackBox.innerHTML = isCorrect
        ? "<p>Correct!</p>"
        : `<p>Wrong! The correct answer is ${correctAnswer.toUpperCase()}.</p>`;
    document.querySelector(".container").appendChild(feedbackBox);
};

const clearFeedback = () => {
    const feedbackBox = document.querySelector(".feedback");
    if (feedbackBox) {
        feedbackBox.remove();
    }
};

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
    clearFeedback();
};

const endQuiz = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100">Thank you for playing the quiz</h3>
            <h4 class="w-100"> ${correct} / ${total} are correct</h4>
        </div>
    `;
};

optionInputs.forEach((input) => {
    input.addEventListener("change", () => {
        submitButton.disabled = false; // Enable the submit button when an option is selected
    });
});

submitButton.addEventListener("click", function () {
    const data = quizData[index];
    const ans = getAnswer();
    const isCorrect = ans === data.correct;

    if (isCorrect) {
        correct++;
    } else {
        wrong++;
    }

    showFeedback(isCorrect, data.correct);
    submitButton.disabled = true; // Disable the submit button after submission

    setTimeout(() => {
        index++;
        loadQuestion();
    }, 2000); // Delay to show feedback for 2 seconds
});

loadQuestion();
