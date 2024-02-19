const words = [
    ["brave", "curious", "playful", "kind", "clever"],
    ["unicorn", "dragon", "wizard", "princess", "robot"],
    ["laughed", "sang", "danced", "flew", "discovered"],
    ["moon", "castle", "forest", "planet", "secret cave"],
    ["treasure", "magic wand", "book of spells", "alien friend", "hidden map"]
];

let selectedWords = Array(5).fill(0);

function selectWord(index) {
    selectedWords[index] = (selectedWords[index] + 1) % words[index].length;
    updateButtonLabel(index);
}

function updateButtonLabel(index) {
    const button = document.getElementsByTagName('button')[index];
    button.textContent = words[index][selectedWords[index]];
}

function generateStory() {
    const storyOutput = document.getElementById('storyOutput');
    const story = selectedWords.map((wordIndex, categoryIndex) => words[categoryIndex][wordIndex]).join(' ');
    storyOutput.textContent = `Once upon a time, a ${story}.`;
}
