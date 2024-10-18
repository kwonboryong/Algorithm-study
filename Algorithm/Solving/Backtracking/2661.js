const fs = require('fs');
const path = require('path');

// input.txt에서 n 읽기
const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim();
const n = parseInt(input, 10); // 파일에서 읽은 값을 정수로 변환

function isValid(sequence) {
    const len = sequence.length;

    // 같은 숫자가 3번 이상 연속인지 확인
    if (len >= 3 && sequence[len - 1] === sequence[len - 2] && sequence[len - 2] === sequence[len - 3]) {
        return false;
    }

    // 부분 수열 중 1, 2, 3이 연속인지 확인
    if (len >= 3) {
        const lastThree = sequence.slice(-3);
        if (lastThree[0] !== lastThree[1] && lastThree[1] !== lastThree[2] && lastThree[0] !== lastThree[2]) {
            return false;
        }
    }

    return true;
}

function findGoodSequence(n, sequence = []) {
    if (sequence.length === n) {
        return sequence.join('');
    }

    for (let i = 1; i <= 3; i++) {
        sequence.push(i);
        if (isValid(sequence)) {
            const result = findGoodSequence(n, sequence);
            if (result) {
                return result;
            }
        }
        sequence.pop();
    }

    return null; // 이 부분은 실제로는 도달하지 않음
}

// 유효한 수열 출력
console.log(findGoodSequence(n));

