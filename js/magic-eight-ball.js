// Put your JavaScript code in this file

const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

// Creates a function to display a random answer from the answers array
function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    let output = answers[index];
    document.getElementById("circle").textContent = output;
    document.getElementById("circle").style.display = "block";
}

// Displays the answer when the ball is clicked, provided a question has been entered
const element3 = document.getElementById("ball");
element3.addEventListener("mousedown", function() {
    if (document.getElementById("question").value !== "") {
        displayAnswer();
    } else {
        alert("Please enter a question.");
    }
});

// Resets the ball and clears the answer when the reset button is clicked
const element4 = document.getElementById("reset");
element4.addEventListener("click", function() {
    document.getElementById("circle").textContent = "";
    document.getElementById("circle").style.display = "none";
});



