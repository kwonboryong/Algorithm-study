const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop() || -1; // 비어있으면 -1 반환
  }

  top() {
    return this.items.length ? this.items[this.items.length - 1] : -1; // 비어있으면 -1 반환
  }

  size() {
    return this.items.length;
  }

  empty() {
    return this.items.length === 0 ? 1 : 0; // 비어있으면 1, 아니면 0 반환
  }
}

let input = [];
const stack = new Stack();
const result = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  const len = parseInt(input[0]); // 첫 번째 줄의 명령 개수

  for (let i = 1; i <= len; i++) {
    const command = input[i].trim().split(' ');

    switch (command[0]) {
      case 'push':
        stack.push(parseInt(command[1])); // 숫자로 변환하여 스택에 추가
        break;

      case 'pop':
        result.push(stack.pop()); // pop 결과 저장
        break;

      case 'size':
        result.push(stack.size()); // 현재 스택 크기
        break;

      case 'empty':
        result.push(stack.empty()); // 비어있는지 확인
        break;

      case 'top':
        result.push(stack.top()); // 최상위 요소
        break;
    }
  }

  console.log(result.join('\n')); // 결과 출력
  process.exit();
});
