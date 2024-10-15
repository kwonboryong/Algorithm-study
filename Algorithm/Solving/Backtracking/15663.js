const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


const [N, M] = input[0].split(' ').map(Number);
const numbers = Array.from(new Set(input[1].split(' ').map(Number))).sort((a, b) => a - b);

const result = [];
const visited = new Array(numbers.length).fill(false);

function backtrack(combination) {
  if (combination.length === M) {
    result.push(combination.join(' '));
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (visited[i]) continue; // 이미 사용한 숫자는 건너뛴다.

    // 중복 방지: 현재 숫자가 이전 숫자와 같고, 이전 숫자가 사용된 경우는 건너뛴다.
    if (i > 0 && numbers[i] === numbers[i - 1] && !visited[i - 1]) continue;

    visited[i] = true; // 사용한 숫자 표시
    backtrack([...combination, numbers[i]]);
    visited[i] = false; // 사용한 숫자 복구
  }
}

backtrack([]);

console.log(result.join('\n'));
