const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


const [N, M] = input[0].split(' ').map(Number);
const heights = input[1].split(' ').map(Number);

let left = 0; // 절단기 최소 높이
let right = Math.max(...heights); // 절단기 최대 높이
let result = 0;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let totalLength = 0;

    for (const height of heights) {
        if (height > mid) {
            totalLength += height - mid; // 잘린 나무의 길이
        }
    }

    if (totalLength >= M) {
        result = mid; // 유효한 H 값을 찾았으므로 저장
        left = mid + 1; // 더 큰 값을 찾기 위해 왼쪽 포인터를 이동
    } else {
        right = mid - 1; // 너무 적으므로 오른쪽 포인터를 이동
    }
}

console.log(result);
