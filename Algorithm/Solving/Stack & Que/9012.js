const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');

const len = input.shift(); 
// input.txt의 첫 번째 요소 (문자열의 개수) 반환
const result = [];

for (let i = 0; i < len; i++) {
    let cnt = 0; // '('와 ')'의 균형을 체크
    let isValid = true; // 현재 괄호 문자열이 올바른지 체크
    
    //  각 문자열의 문자를 하나씩 순회
    for (let s of input[i]) {
        cnt += s === "(" ? 1 : -1;
        // '('가 나오면 cnt를 1 증가
        // ')'가 나오면 cnt를 1 감소
        
        // '('보다 ')'가 먼저 나오면 무효(cnt가 음수가 되지 않도록)
        if (cnt < 0) {
            isValid = false;
            break;
        }
    }
    
    // 마지막까지 cnt가 0이어야 올바른 짝임(cnt가 0이 아니면 '('와 ')'의 개수가 맞지 않다는 뜻)
    if (cnt !== 0) {
        isValid = false;
    }

    // 괄호 문자열에 대한 결과
    result.push(isValid ? 'YES' : 'NO');
}

console.log(result.join('\n'));

