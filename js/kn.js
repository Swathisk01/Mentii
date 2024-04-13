
const questions = [
    "Do you often feel overwhelmed?",
    "Do you have trouble concentrating?",
    "Do you experience frequent headaches or muscle tension?",
    "Do you have trouble sleeping?",
    "Do you often feel irritable or easily angered?",
];

document.addEventListener("DOMContentLoaded", function () {
    const questionsDiv = document.getElementById("questions");
    questions.forEach((question, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <label for="q${index}">${question}</label>
            <select id="q${index}">
                <option value="0">Never</option>
                <option value="1">Sometimes</option>
                <option value="2">Often</option>
                <option value="3">Always</option>
            </select>
        `;
        questionsDiv.appendChild(div);
    });

    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", calculateResult);
});

function calculateResult() {
    const responses = [];
    for (let i = 0; i < questions.length; i++) {
        const response = parseInt(document.getElementById(`q${i}`).value);
        responses.push(response);
    }

    const totalScore = responses.reduce((acc, curr) => acc + curr, 0);
    let result = "";

    if (totalScore <= 5) {
        result = "Low stress";
    } else if (totalScore <= 10) {
        result = "Moderate stress";
    } else {
        result = "High stress";
    }

    document.getElementById("result").innerText = `Your stress level: ${result}`;
}