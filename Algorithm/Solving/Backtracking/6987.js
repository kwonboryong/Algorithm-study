const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


const data = [];

// 6개의 국가 정보 저장
for (let i = 0; i < 4; i++) {
  const temp = input[i].split(' ').map(Number);
  const nation = [];
  for (let j = 0; j < 6; j++) {
    nation.push([temp[j * 3], temp[j * 3 + 1], temp[j * 3 + 2]]);
  }
  data.push(nation);
}

const cases = [];

// 경기 조합 미리 계산
for (let i = 0; i < 6; i++) {
  for (let j = i + 1; j < 6; j++) {
    cases.push([i, j]);
  }
}

let possible = false;

function backtracking(round, nations) {
  if (round === 15) {
    if (nations.every(nation => nation.every(count => count === 0))) {
      possible = true;
    }
    return;
  }

  const [n1, n2] = cases[round];

  // 승-패
  if (nations[n1][0] > 0 && nations[n2][2] > 0) {
    nations[n1][0]--;
    nations[n2][2]--;
    backtracking(round + 1, nations);
    
    nations[n1][0]++;
    nations[n2][2]++;
  }

  // 무승부
  if (nations[n1][1] > 0 && nations[n2][1] > 0) {
    nations[n1][1]--;
    nations[n2][1]--;
    backtracking(round + 1, nations);

    nations[n1][1]++;
    nations[n2][1]++;
  }

  // 패-승
  if (nations[n1][2] > 0 && nations[n2][0] > 0) {
    nations[n1][2]--;
    nations[n2][0]--;
    backtracking(round + 1, nations);

    nations[n1][2]++;
    nations[n2][0]++;
  }
}

// 4개의 테스트 케이스에 대해 각각 처리
for (let t = 0; t < 4; t++) {
  possible = false;
  backtracking(0, data[t]);

  console.log(possible ? 1 : 0);
}
