const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


const stack = [];
const result = [];

const len = parseInt(input[0]); 
// 입력 파일(input.txt)의 첫 번째 줄의 명령어 개수

for (let i = 1; i <= len; i++) {
  const command = input[i].trim().split(' ');
  // 명령어 나누기 (ex. ['push', '3'])

  switch (command[0]) {
    case 'push':
      stack.push(parseInt(command[1])); 
      // 명령어의 숫자를 숫자로 변환해서 스택에 저장
      break;

    case 'pop':
      result.push(stack.pop() || -1); 
      // pop 결과 저장 || 빈 배열이면 -1
      break;

    case 'size':
      result.push(stack.length); 
      // 현재 스택 크기의 크기
      break;

    case 'empty':
      result.push(stack.length === 0 ? 1 : 0); 
      // 빈 배열이면 1(true) || 아니면 0(false)
      break;

    case 'top':
      result.push(stack.length ? stack[stack.length - 1] : -1); 
      // 안 비어있으면 스택의 끝 요소 저장 || 비어있으면 -1 
      break;
  }
}

console.log(result.join('\n'));
// 결과를 줄바꿈해서 출력
