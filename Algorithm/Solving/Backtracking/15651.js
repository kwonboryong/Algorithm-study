const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split(' ');


const N = parseInt(input[0]);
const M = parseInt(input[1]);

const result = [];
const sequence = [];

// 백트래킹 함수
function backtrack(depth) {
  // 수열이 M개 선택되었을 때 출력
  if (depth === M) {
    result.push(sequence.join(' '));
    return;
  }

  // 1부터 N까지 수 선택 가능 (중복 허용)
  for (let i = 1; i <= N; i++) {
    sequence.push(i); // 숫자 선택
    backtrack(depth + 1); // 다음 단계로 이동
    sequence.pop(); // 선택한 숫자 제거 (백트래킹)
  }
}

backtrack(0);

console.log(result.join('\n'));
