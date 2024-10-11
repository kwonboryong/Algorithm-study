const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputPath, 'utf-8').trim().split(' ');


// 입력값 파싱
const [N, K] = input.map(Number);

// 값이 올바르게 파싱되었는지 확인
if (isNaN(N) || isNaN(K)) {
  console.error("입력 값이 잘못되었습니다. N과 K를 올바르게 입력하세요.");
  process.exit(1);
}

function hideAndSeek(N, K) {
  if (N === K) return 0; // 출발점과 도착점이 같으면 0초
  
  const visited = Array(100001).fill(false); // 방문 여부 체크 배열
  const queue = [[N, 0]]; // [현재 위치, 걸린 시간]을 저장하는 큐
  visited[N] = true; // 출발점 방문 처리
  
  while (queue.length > 0) {
    const [current, time] = queue.shift();
    
    // 세 가지 경우를 탐색
    for (let next of [current - 1, current + 1, current * 2]) {
      if (next === K) return time + 1; // 목표 지점에 도달하면 시간 반환
      
      // 범위를 벗어나지 않고 방문하지 않은 위치일 경우 큐에 추가
      if (next >= 0 && next <= 100000 && !visited[next]) {
        visited[next] = true; // 방문 처리
        queue.push([next, time + 1]); // 큐에 [위치, 시간] 추가
      }
    }
  }
}

console.log(hideAndSeek(N, K)); // 결과 출력
