const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');

const n = parseInt(input[0]);
const s = input[1].trim();

let positions = {
    B: [],
    O: [],
    J: []
};

// 각 문자의 위치 저장
for (let i = 0; i < n; i++) {
    if (s[i] === 'B') positions.B.push(i);
    if (s[i] === 'O') positions.O.push(i);
    if (s[i] === 'J') positions.J.push(i);
}

let minDistance = Infinity;

// 모든 조합을 통해 거리 계산
for (const b of positions.B) {
    for (const o of positions.O) {
        for (const j of positions.J) {
            const distance = Math.abs(b - o) + Math.abs(o - j) + Math.abs(j - b);
            minDistance = Math.min(minDistance, distance);
        }
    }
}

// 결과 출력
console.log(minDistance);

