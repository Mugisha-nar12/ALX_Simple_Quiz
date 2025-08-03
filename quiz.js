function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    if (!selectedOption) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "black";
        return;
    }

    const userAnswer = selectedOption.value;

    // Reset all labels color first
    document.querySelectorAll('input[name="quiz"]').forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`);
        label.style.color = "black";
    });

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";

        // Highlight correct answer label in green
        const correctLabel = document.querySelector(`label[for="${selectedOption.id}"]`);
        correctLabel.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";

        // Highlight selected wrong answer label in red
        const wrongLabel = document.querySelector(`label[for="${selectedOption.id}"]`);
        wrongLabel.style.color = "red";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);