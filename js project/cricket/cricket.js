// 1. Get score from localStorage or initialize it
let scorestr = localStorage.getItem('score');
let score;

// Check if the retrieved value is valid JSON
try {
    score = scorestr ? JSON.parse(scorestr) : { playerscore: 0, computerscore: 0, draw: 0 };
} catch (e) {
    console.error("Error parsing score from localStorage. Resetting score.", e);
    score = { playerscore: 0, computerscore: 0, draw: 0 };
    localStorage.setItem('score', JSON.stringify(score)); // Reset localStorage
}

// Debugging: Log the score object to ensure it's initialized correctly
console.log("Initial Score:", score);

// 2. Function to return the score string
function displayscore(score) {
    return `
Player Score: ${score.playerscore}
Computer Score: ${score.computerscore}
Draws: ${score.draw}`;
}

// 3. Possible choices
const choices = ['Bat', 'Bowl', 'Stump'];

// 4. Get random choice
function getrandomchoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// 5. Main game logic
function playgame(userchoice) {
    const computerchoice = getrandomchoice();

    let result = "";

    if (computerchoice === userchoice) {
        score.draw++;
        result = "It's a draw!";
    } else if (
        (userchoice === 'Bat' && computerchoice === 'Bowl') ||
        (userchoice === 'Bowl' && computerchoice === 'Stump') ||
        (userchoice === 'Stump' && computerchoice === 'Bat')
    ) {
        score.playerscore++;
        result = "You win!";
    } else {
        score.computerscore++;
        result = "Computer wins!";
    }

    // Debugging: Log the updated score object
    console.log("Updated Score:", score);

    // Save updated score object
    localStorage.setItem('score', JSON.stringify(score));

    // Show result
    showresult(userchoice, computerchoice, result);
}
function resetScore(scoreStr) {
    score = scoreStr ? JSON.parse(scoreStr) : {
      win: 0,
      lost: 0,
      tie: 0,
    };
}
// 6. Display result and scores
function showresult(userchoice, computerchoice, result) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
You chose: ${userchoice}<br>
Computer chose: ${computerchoice}<br><br>
Result: ${result}<br>
${displayscore(score)}
    `;
}