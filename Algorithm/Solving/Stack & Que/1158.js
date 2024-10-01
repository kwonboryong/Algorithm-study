const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split(' ');


// 입력값을 숫자로 변환
const n = parseInt(input[0], 10); // 총 인원
const k = parseInt(input[1], 10); // 제거할 사람의 순서

function solution(n, k) {
  const queue = []; // 총 인원 배열
  const answer = []; // 제거 순서 배열

  // 총 인원을 총 인원 배열에 넣음
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  // 제거 순서 카운터
  let count = 1;

  while (queue.length) {
    const shiftItem = queue.shift(); 
    // 큐에서 첫 번째 요소를 꺼냄

    if (count % k === 0) {
      // 현재 카운터 === 제거 순서라면 

      answer.push(shiftItem);
      //  k번째 사람을 제거 순서 배열에 추가
    } else {
      queue.push(shiftItem); 
      // k번째가 아닌 사람은 다시 총 인원 배열의 끝에 추가
    }

    count++;
    // 카운터 증가
  }

  // 형식대로 출력
  console.log(`<${answer.join(', ')}>`);
}

// 문제 풀이 함수 실행
solution(n, k);
