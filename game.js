
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

console.log(getComputerChoice);

function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(choice)) {
        return choice;
    } else {
        return 'Invalid choice';
    }
}

console.log(getHumanChoice());


