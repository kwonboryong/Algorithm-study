const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


const [n, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let count = 0;

function dfs(index, sum) {
  if (index === n) return;
  
  sum += arr[index];

  // 부분수열의 합이 S와 같은지 확인
  if (sum === S) count++;
  
  // 현재 원소를 포함하는 경우와 포함하지 않는 경우 모두 탐색
  dfs(index + 1, sum);  // 현재 원소를 포함한 경우
  dfs(index + 1, sum - arr[index]);  // 현재 원소를 포함하지 않은 경우
}

// 탐색 시작
dfs(0, 0);

console.log(count);
