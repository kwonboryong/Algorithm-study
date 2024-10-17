const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


const [L, C] = input[0].split(' ').map(Number);
const letters = input[1].split(' ').sort();

const vowels = ['a', 'e', 'i', 'o', 'u'];
const result = [];

function isValid(combination) {
    let vowelCount = 0;
    let consonantCount = 0;

    for (const char of combination) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }

    return vowelCount >= 1 && consonantCount >= 2;
}

function generateCombinations(start, combination) {
    if (combination.length === L) {
        if (isValid(combination)) {
            result.push(combination.join(''));
        }
        return;
    }

    for (let i = start; i < C; i++) {
        generateCombinations(i + 1, [...combination, letters[i]]);
    }
}

generateCombinations(0, []);
console.log(result.join('\n'));
