const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().trim().split('\n');


function solution(input) {
  // 첫 번째 값을 테스트 케이스 수 T로, 나머지는 각각의 케이스로 분리
  const [T, ...cases] = input;

  // 상, 하, 좌, 우 방향을 나타내는 배열
  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1] // 위, 아래, 왼쪽, 오른쪽
  ];


  // DFS 함수: 현재 위치 (x, y)에서 시작해 연결된 모든 배추를 방문
  const dfs = (x, y, grid, visited, N, M) => {
    // 현재 위치를 방문 처리
    visited[x][y] = true;

    // 상, 하, 좌, 우로 이동
    for (let [dx, dy] of directions) {
      const nx = x + dx;  // 새로운 x좌표
      const ny = y + dy;  // 새로운 y좌표

      // 유효한 좌표 내에 있고, 배추가 있으며, 아직 방문하지 않았다면 탐색
      if (nx >= 0 && ny >= 0 && nx < N && ny < M && grid[nx][ny] === 1 && !visited[nx][ny]) {
        dfs(nx, ny, grid, visited, N, M); 
      }
    }
  };

  
  let idx = 0;  // 각 테스트 케이스의 시작 인덱스
  let result = [];  // 각 테스트 케이스의 결과를 저장할 배열

  // 테스트 케이스 수만큼 반복
  for (let t = 0; t < T; t++) {
    // 가로 M, 세로 N, 배추의 개수 K 추출
    const [M, N, K] = cases[idx].split(' ').map(Number);

    idx++;

    // 농장을 표현하는 2차원 배열(grid)와 방문 여부를 저장하는 배열(visited) 초기화
    const grid = Array.from({ length: N }, () => Array(M).fill(0));
    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    // 배추 심기
    for (let i = 0; i < K; i++) {
      const [x, y] = cases[idx].split(' ').map(Number);
      grid[y][x] = 1;  // 배추가 심어진 좌표를 1로 표시
      idx++;
    }

    let count = 0;  // 군집의 개수를 세기 위한 변수

    // 모든 좌표를 돌면서 배추가 심어져 있고 방문하지 않은 경우 DFS 탐색
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (grid[i][j] === 1 && !visited[i][j]) {
          dfs(i, j, grid, visited, N, M);  
          // 배추 군집 탐색
          
          count++;  
          // 하나의 군집을 찾았으므로 카운트 증가
        }
      }
    }

    // 결과 배열에 군집 수 추가
    result.push(count);
  }

  console.log(result.join('\n'));
}

solution(input);
