const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


// 배열 분해
let [n, ...arr] = input; 
// n은 테스트 수, 나머지는 테스트 정보

// 문자열 배열을 숫자 배열로 변환
arr = arr.map((item) => item.split(' ').map(Number));
let answer = '';

for (let i = 0; i < arr.length; i += 2) {
  let count = 0; // 출력된 문서의 수
  const priorities = arr[i + 1]; // 현재 테스트의 우선순위 배열
  let location = arr[i][1]; // 목표 문서의 초기 위치


  while (true) {
    // 현재 큐에서 가장 높은 우선순위를 가진 문서를 찾기
    const max = Math.max(...priorities);

    // 큐 앞에서 문서 하나 꺼내기
    const number = priorities.shift();

    // 꺼낸 문서의 중요도(number)가 최대 중요도(max) 비교
    if (number === max) {
      count++;

      // 목표 문서의 위치가 0일 경우
      if (location === 0) {
        //현재 출력된 문서 수(count)를 정답 배열에 추가
        answer += count + '\n';
        break;
      }

    } else {
      // 꺼낸 문서의 중요도가 최대보다 낮으면 큐의 맨 뒤에 다시 추가
      priorities.push(number);
    }


    // 현재 문서의 위치가 0일 경우
    if (location === 0) {
      // 큐에서 마지막 문서로 위치 옮기기
      location = priorities.length - 1;

    } else {
      // 그렇지 않으면 단순히 1 감소
      location--;
    }
  }
}

console.log(answer.trim());

