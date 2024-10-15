const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


const [K, N] = input[0].split(' ').map(Number);
const lengths = input.slice(1).map(Number);

let left = 1; // 랜선 최소 길이
let right = Math.max(...lengths); // 랜선 최대 길이
let result = 0;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    // 현재 길이로 자를 수 있는 랜선 개수 계산
    for (const length of lengths) {
        count += Math.floor(length / mid); // 현재 랜선 길이로 자른 랜선 개수
    }

    // 필요한 랜선 개수 이상이면
    if (count >= N) {
        result = mid; // 가능한 최대 길이 업데이트
        left = mid + 1; // 더 큰 길이 탐색
    } else {
        right = mid - 1; // 더 작은 길이 탐색
    }
}

console.log(result);
